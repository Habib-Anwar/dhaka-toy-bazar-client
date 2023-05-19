

const Promo = () => {
    return (
        <div className="hero mt-12" style={{ backgroundImage: `url("https://i.ibb.co/QNdcKs9/promo1.jpg")`, height: "500px", borderRadius: "100px"  }}>
        <div className="hero-overlay bg-opacity-50 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mt-52">
            <h1 className="mb-4 text-5xl rounded-full font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">PROMO IN OUR STORES!</h1>
            <p className="mb-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Promo;