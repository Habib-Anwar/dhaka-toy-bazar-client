import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const AllToys = () => {
    const { user } =useContext(AuthContext);
    const [toys, setToys] = useState([]);

    
    useEffect(()=>{
        fetch('http://localhost:5000/addingToys')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default AllToys;