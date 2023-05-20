import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddToys = () => {


    const toy = useLoaderData();
    const {name, price, category, details} = toy;
    const {user} = useContext(AuthContext);

    const handleAddToy = event =>{
        event.preventDefault();

        const form = event.target;
        const picture = form.photo.value;
        const toy = form.toy.value;
        const seller = form.seller.value;
        const email = user?.email;
        const addToy = {
            sellerName: seller,
            picture,
            toy,
            email,
            category,
            price,
            details
        }
         console.log(addToy);
         fetch('http://localhost:5000/addingToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Toy added successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
         })

    }

    return (
        <div>
            <h2 className="text-5xl font-bold text-center">Add A Toy:{category}</h2>
                        <div className="card-body">
                            <form onSubmit={handleAddToy}>
                                <div className="grid grid-cols-2 gap-8">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Picture" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Toy Name</span>
                                    </label>
                                    <input type="text" name="toy" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name="seller" defaultValue={user?.displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub-caterogy</span>
                                    </label>
                                    <input type="text" defaultValue={category} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" defaultValue={'$'+ price}  className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="text" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" defaultValue={details}  className="input input-bordered" />
                                </div>
                                </div>
                                <input type="submit" value="Add Now"  className="btn btn-block mt-8"/>
                            </form>
                        </div>
                    </div>
    );
};

export default AddToys;