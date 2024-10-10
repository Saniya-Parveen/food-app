import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'

export default function CartItem({ id, img, name, price, rating, quantity}) {
  const dispatch = useDispatch()
  return (
    <div className='food-item'>
        <img src={img} alt={name} className='food-image' />
        <div className='food-info'>
            <h2 className='food-name'>{name}</h2>
            <p className='food-price'>${price}</p>
            <div className='food-rating'>
                <span>Rating: {rating}</span>
            </div>
            <div className='food-quantity'>
                <span>Quantity: {quantity}</span>

            </div>
            <button style={{width:"50%"}} onClick={()=>dispatch(removeFromCart({id}))}>Delete</button>

        </div>

    </div>
  )
}
