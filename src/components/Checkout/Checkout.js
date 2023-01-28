import React from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Header from '../Header/Header';
import { useStateValue } from '../StateProvider';

import "./Checkout.css";
import Subtotal from '../Subtotal/Subtotal';


const Checkout = () => {
    const [{ cart }, dispatch] = useStateValue();
  return (
   <div> 
   <Header />
  
    <div className='checkout'>
       
<div className='checkout_left'>

      <img
      className='checkout_adimg'
      src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg'
      alt=''
      />

     {cart?.length === 0 ? (
        <div>
            <h2>Your  Amazon Cart is empty.</h2>
            <p>You have no items in your cart. To buy one or more products
                "Add to Cart" next to the item.
            </p>
        </div>
     ) : (
        <div>
            <h2 className='checkout_title'>Your Shopping Cart</h2>

            {/* Listing out all the checkout products */}
            {
            cart.map(item => (
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))
            }

        </div>
     )}
</div>
{cart.length > 0 && (
  <div className='checkout_right'>
    
    <Subtotal />
  </div>
)}
    </div>
    </div>
  );
}
// for subtotal of numbers we have downloaded the 
// npm install react-currency-format --save --force
export default Checkout;