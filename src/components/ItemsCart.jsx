import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export default function ItemsCart() {
  const cartItems = useSelector((state)=> state.cart.cart)
  return (
    <div>
      {
        cartItems.map((val)=>{
          return(
            <CartItem
              id={val.id}
              img={val.img}
              name={val.name}
              price={val.price}
              rating={val.rating}
              quantity={val.qty}
            />
          )
        })
      }
    </div>
  )
}
