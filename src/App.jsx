import { useState } from 'react'
import './App.css'
import AddtoCart from './components/AddtoCart'
import CategoryMenu from './components/CategoryMenu'
import FoodItems from './components/FoodItems'
import Navbar from './components/Navbar'

function App() {
  const [showCart, setShowCart] = useState(false)

  return (
    <>
     <Navbar/>
     <CategoryMenu/>
     <FoodItems/>
     {
      (showCart) ? <AddtoCart setShowCart={setShowCart}/>: <i className='fa-solid fa-cart-shopping' onClick={()=> setShowCart(true)}></i>
     }
    </>
  )
}

export default App
