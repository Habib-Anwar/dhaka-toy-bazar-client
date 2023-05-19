

const ShopCard = ({ result }) => {
    const { picture, name, price, rating, details } = result
    return (
        <div className="flex justify-center ">
            <img src={picture} alt="" style={{ width: '150px', height: '200px' }}className="mt-4" />

            <div className="mt-8 ml-12">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="font-semibold">${price}</p>
                <p>{rating}</p>
                <button className="btn btn-info">View Details</button>
            </div>
        </div>
    );
};

export default ShopCard;