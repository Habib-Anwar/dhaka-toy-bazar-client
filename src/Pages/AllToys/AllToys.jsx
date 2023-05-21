import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ToyTable from "./ToyTable";
import Swal from "sweetalert2";


const AllToys = () => {
    const { user } =useContext(AuthContext);
    const [toys, setToys] = useState([]);

    
    useEffect(()=>{
        fetch(`http://localhost:5000/addingToy?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
    }, [user])
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/addingToy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(tab =>tab._id !== id);
                            setToys(remaining);
                        }
                    })

            }
        })
    }


    const handleUpdate = id =>{
        fetch(`http://localhost:5000/addingToy/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'updated'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = toys.filter(toyTab => toyTab._id !== id);
                const updated = toys.find(toyTab => toyTab._id === id);
                updated.status = 'confirm'
                const newToys = [updated, ...remaining];
                setToys(newToys);

            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl font-bold">My Toys: {toys.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Toy Name</th>
        <th>Seller Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Delete/Update</th>
      </tr>
    </thead>
    <tbody>
      {
        toys.map(toyTab=><ToyTable
        key={toyTab._id}
        toyTab={toyTab}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}></ToyTable>)
      }
     
    </tbody>
    
  </table>
</div>
        
        </div>
    );
};

export default AllToys;