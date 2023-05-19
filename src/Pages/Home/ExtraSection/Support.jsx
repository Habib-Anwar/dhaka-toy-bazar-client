import {  FaComments, FaMoneyCheckAlt,  FaRocket,  FaTruck } from 'react-icons/fa';

const Support = () => {
    return (
        <div className="bg-slate-400 rounded-lg mt-14 flex justify-between" style={{width: "1280px", height: "350px"}}>
            <div className='mt-24 p-4'>
            <FaTruck className='text-7xl text-white ml-12'></FaTruck>
            <h3 className='text-xl font-bold text-white ml-8'>Fast Delivery</h3>
            <p className='text-sm'>
                Find tracking information and <br></br>order details from <button className='font-bold'>Your Orders</button>.
            </p>
            </div>
            <div className='mt-24 p-4'>
            <FaMoneyCheckAlt className='text-7xl text-white ml-16'></FaMoneyCheckAlt>
            <h3 className='text-xl font-bold text-white ml-12'>Save Money</h3>
            <p className='text-sm'>
              Save $5 every year compared to<br></br> the monthly plan by paying yearly.
            </p>
            </div>
            <div className='mt-28 p-4'>
            <FaRocket className='text-5xl text-white ml-12'></FaRocket>
            <h3 className='text-xl font-bold text-white ml-6'>Fast Returns</h3>
            <p className='text-sm'>
                Money back. If your children <br></br>did not like the toy.
            </p>
            </div>
            <div className='mt-24 p-4'>
            <FaComments className='text-7xl text-white ml-8'></FaComments>
            <h3 className='text-xl font-bold text-white ml-4'>Online Support</h3>
            <p className='text-sm'>
                Use our 24/7 customer hotline
            </p>
            </div>
        </div>
    );
};

export default Support;