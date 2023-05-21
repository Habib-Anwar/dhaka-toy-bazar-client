import './Shop.css'
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import ShopCard from './ShopCard';
import ShopMart from './ShopMart';
import ShopCart from './ShopCart';


const Shop = () => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState("Marvel");
    const [productTab, setProductTab] = useState("Disney");
    const [starTab, setStarTab] = useState("Star");

    useEffect(()=>{
        fetch("https://dhaka-toy-bazar-server.vercel.app/bazar")
        .then(res =>res.json())
        .then(data =>setCategories(data))
    }, []);

    const results = categories?.filter(status=>status.category == activeTab);
    const products = categories?.filter(status =>status.category == productTab);
    const stars = categories?.filter(status =>status.category == starTab);
    

    const [value, setValue] = useState('1');
    const handleChange = (id) => {
        setValue(id);
      };
    return (
        <div>
        <div className='text-center'>
            <h2 className='text-4xl font-bold text-orange-500 mt-4'>Shop Now</h2>
          <div className='border-2 bg-base-100 rounded-box p-2 mt-4'>
            <div onChange={handleChange} aria-label="lab API tabs example">
              <Tab className='btn btn-outline bg-emerald-900 ' label="Marvel" value="1" onClick={()=>{handleChange(1)}}/>
              <Tab className='btn btn-outline btn-secondary' label="Disney" value="2" onClick={()=>{handleChange(2)}}/>
              <Tab className='btn btn-outline btn-success' label="Star Wars" value="3" onClick={()=>{handleChange(3)}}/>
            </div>
          </div>
          <div className={value === 1? 'show-content': 'content'} value="1">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {
                    results.map(result=><ShopCard
                    key={result._id}
                    result={result}></ShopCard>)
                }
            </div>
          </div>
          <div className={value === 2? 'show-content': 'content'} value="2">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              {
                products.map(product =><ShopMart
                key={product._id}
                product={product}></ShopMart>)
              }
            </div>
            </div>
          <div className={value === 3? 'show-content': 'content'} value="3">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              {
                stars.map(star=><ShopCart
                key={star._id}
                star={star}></ShopCart>)
              }
            </div>
          </div>
        </div>
      </div>
    );
};

export default Shop;
