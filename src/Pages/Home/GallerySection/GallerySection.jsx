import { useEffect } from 'react';
import './GallerySection.css'
import Aos from 'aos';

const GallerySection = ({ image, title, description }) => {

  useEffect(() =>{
    Aos.init()
  },[])
    return (
      <>
      
        <div className="grid-item">
      <img src={image} alt={title} data-aos='fade-right'/>
      <div className="overlay">
        <div className="overlay-content">
          <h3 className='text-3xl text-cyan-400' data-aos='fade-left'>{title}</h3>
          <p data-aos='fade-down'>{description} </p>
        </div>
      </div>
    </div>
    </>
    );
};

export default GallerySection;