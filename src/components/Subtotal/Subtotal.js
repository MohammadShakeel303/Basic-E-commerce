import React from 'react'
import "./Subtotal.css";
import NumberFormat from 'react-number-format';
import { useStateValue } from "../StateProvider";
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';


const Subtotal = () => {
    const [{cart}, dispatch] = useStateValue();

   
  return (
    <div className='subtotal'>

      
       
             
             
        <button className='subtotal_button'>Proceed to Checkout</button>
      
    </div>
  );
}

export default Subtotal;
