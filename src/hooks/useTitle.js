import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Dhaka Toy Bazar`;
    },[title])
};

export default useTitle ;