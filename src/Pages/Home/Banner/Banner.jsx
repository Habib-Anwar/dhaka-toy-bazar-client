import caru1 from '../../../assets/images/caru1.jpg'
import caru2 from '../../../assets/images/caru2.jpg'
import caru3 from '../../../assets/images/caru-3.jpg'
import caru4 from '../../../assets/images/caru-4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={caru1} className="w-full" />
          <div className="absolute flex justify-between left-6  top-1/2 text-white ">
           <h2 className='text-4xl ml-12 px-8 -mt-12 text-center bg-gradient-to-r from-[#a49f9f00] to-[rgba(21, 21, 21, 0)]  '>Your Ultimate Toy Shop Wonderland</h2>
           <p className='mt-5'>Welcome to the ultimate destination for all your toy shopping needs! Explore a world of imagination and wonder as you browse through our extensive collection of toys, games, and playtime essentials. From classic favorites to the latest trends, we have something to delight every child and child-at-heart. With our carefully curated selection, exceptional quality, and unbeatable prices.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={caru2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={caru3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={caru4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;