import React from 'react'
import ItemsCart from './ItemsCart'
import { useSelector } from 'react-redux';

export default function AddtoCart(props) {

  const cartItems = useSelector((state)=> state.cart.cart)
  const totalQuantity = cartItems.reduce((acc,item)=>{
    return item.qty + acc
  },0)

  const totalPrice = cartItems.reduce((acc,item)=>{
    return item.qty* item.price + acc
  },0)

  const {setShowCart} = props;
  return (
    
    <div className='cart-container'>
        <div className='cart-header'>
            <h1>My Order</h1>
            <i class='fa-regular fa-circle-xmark' onClick={()=> setShowCart(false)}></i>

        </div>
        <div className='cart-body'>
          <ItemsCart/>

        </div>
        <div class='cart-footer'>
            <h3>Items: {totalQuantity}</h3>
            <h3>Total Amount: {totalPrice}</h3>
            <hr/>
            <button className='checkout-btn'>Checkout</button>
        </div>

    </div>
  )
}
