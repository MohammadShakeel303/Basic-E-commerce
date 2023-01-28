import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{cart}, dispatch] = useStateValue();

  const removeFromCart = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_CART",
      id:id,
    })
  }

  return (
    <div className="checkoutproduct">
      <img  className="checkoutproduct_image" src={image} alt="" />
      <div className="checkoutproduct_info">
        <div className="checkoutproduct_title">{title}</div>

        <p className="checkoutproduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutproduct_rating ">
          {Array(rating)
            .fill()
            .map((_,i) => (
              <p>&#11088;</p>
            ))}
        </div>
        
        <button onClick={ removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
