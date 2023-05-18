

const ShopCard = ({re}) => {
    const {picture,name,price,rating,details} = re
    return (
        <div>
            <img src={picture} alt=""  style={{width:'150px', height:'200px'}}/>
        
        <h3>{name}</h3>
        <p>{price}</p>
        </div>
    );
};

export default ShopCard;