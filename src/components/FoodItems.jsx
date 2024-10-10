import React from 'react'
import FoodData from '../data/FoodData'
import FoodCard from './FoodCard'

export default function FoodItems() {
  return (
    <div className='fooditem-container'>
        {
            FoodData.map((food)=>{
                return(
                    <FoodCard
                      id={food.id}
                      img={food.img}
                      name={food.name}
                      desc={food.desc}
                      price={food.price}
                      rating={food.rating}
                    />
                )
            })
        }
    </div>
  )
}
