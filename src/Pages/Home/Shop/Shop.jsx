import './Shop.css'
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import ShopCard from './ShopCard';


const Shop = () => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState("Marvel");

    useEffect(()=>{
        fetch("shopCategory.json")
        .then(res =>res.json())
        .then(data =>setCategories(data))
    }, []);

    const result = categories?.filter(status=>status.category == activeTab)
    console.log(result)

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
            <div>
                {
                    result.map(re=><ShopCard
                    key={re.id}
                    re={re}></ShopCard>)
                }
            </div>
          </div>
          <div className={value === 2? 'show-content': 'content'} value="2">Item Two</div>
          <div className={value === 3? 'show-content': 'content'} value="3">Item Three</div>
        </div>
      </div>
    );
};

export default Shop;
