import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";




const Home = () => {
    const gridData = [
        {
          id: 1,
          image: 'https://i.ibb.co/bFn1fMd/hulk.jpg',
          title: 'Latest Collections',
          description: 'Toy products are designed to entertain and engage children of various ages. They come in a wide range of forms, from stuffed animals and action figures to puzzles and building blocks.',
        },
        {
          id: 2,
          image: 'https://i.ibb.co/B4JM2Ms/ironMan.jpg',
          title: 'Exclusive Collections',
          description: 'Toy products are designed to entertain and engage children of various ages. They come in a wide range of forms, from stuffed animals and action figures to puzzles and building blocks.',
        },
        {
          id: 3,
          image: 'https://i.ibb.co/NLYWG19/thor.jpg',
          title: 'Limited Collections',
          description: 'Toy products are designed to entertain and engage children of various ages. They come in a wide range of forms, from stuffed animals and action figures to puzzles and building blocks.',
        },
        {
          id: 4,
          image: 'https://i.ibb.co/KynPMqg/spider.jpg',
          title: 'Full Set',
          description: 'Toy products are designed to entertain and engage children of various ages. They come in a wide range of forms, from stuffed animals and action figures to puzzles and building blocks.',
        },
       
      ];
    return (
        <div>
            <Banner></Banner>
            <div className="grid-container mt-4">
      {gridData.map((item) => (
        <GallerySection
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
        </div>
    );
};

export default Home;