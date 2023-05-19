

const Promo = () => {
    return (
    <>
        <div className="hero mt-12" style={{ backgroundImage: `url("https://i.ibb.co/QNdcKs9/promo1.jpg")`, height: "500px", borderRadius: "100px" }}>
            <div className="hero-overlay bg-opacity-55 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md mt-52">
                    <h1 className="mb-4 text-5xl rounded-full font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">PROMO IN OUR STORES!</h1>
                    <p className="mb-4 text-orange-300">Use your coupon code and get an awesome discount on a new game for your children along with our detailed review, tips and hints!</p>  
                   <div className="flex justify-around">
                   <button className="btn btn-warning">GET COUPON</button>
                   <button className="btn gap-2 bg-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        PURCHASE
                    </button>
                   </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Promo;