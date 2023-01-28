import React from 'react'
import "./Product.css";
import { useStateValue } from "../StateProvider";

const Product = ({id, title, image, price,rating}) => {
  const [{cart}, dispatch] = useStateValue();

  const addToCart = () => {
//Add item to basket...
dispatch({
  type: "ADD_TO_CART",
  item:{
    id:id,
    title:title,
    image:image,
    price:price,
    rating:rating,
  },
});
  };

  return (
    <div className='Product'>
      <div className= 'product_info'>

      <p>{title}</p>
      <p className='product_price'>
        <small>$ </small>
        <strong>{price} </strong>
      </p>
      <div className='product_rating '>
        {Array(rating).fill().map((_) => (
            <p>&#11088;</p>
        ))} 

      </div>
      </div>

      <img  className='product_img'src={image} alt='' />
       <button className='product_button'  
      onClick={addToCart}>Add to Cart</button>
    </div>
    
  );
}

export default Product;
