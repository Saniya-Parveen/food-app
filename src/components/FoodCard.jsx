import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'


export default function FoodCard(props) {
  const {img, name, price, rating, desc, id} = props
  const dispatch = useDispatch()
  return (

    <div className='food-card'>
      <img src={img} alt={name} />
      <div className='content'>
        <h2 className='name'>{name}</h2>
        <p className='desc'>{desc.slice(0,60)}...</p>
        <div className='footer'>
          <span className='price'>${price}</span>
          <span className='rating'>Rating: {rating} ⭐</span>
        </div>
        <button className='cart-btn' onClick={() => dispatch(addToCart({id, img, name, price, rating, qty:1}))}>Add to cart</button>
      </div>

    </div>
  )
}
