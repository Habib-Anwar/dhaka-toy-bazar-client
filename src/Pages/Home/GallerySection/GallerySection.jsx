import './GallerySection.css'

const GallerySection = ({ image, title, description }) => {
    return (
      <>
      
        <div className="grid-item">
      <img src={image} alt={title} />
      <div className="overlay">
        <div className="overlay-content">
          <h3 className='text-3xl text-cyan-400'>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
    </>
    );
};

export default GallerySection;