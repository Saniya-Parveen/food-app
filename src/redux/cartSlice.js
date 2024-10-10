import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart : (state, action) => {
            console.log("A.p", action.payload)
            const checkEle = state.cart.find(item =>{
                return item.id == action.payload.id
            })

            console.log("checkEle", checkEle)
            if(checkEle){
                state.cart = state.cart.map((item)=>{
                    return(item.id == action.payload.id) ? {...item, qty: item.qty+1} : item
                })
            }else{
                console.log("inside else..")
                state.cart.push(action.payload)
            }


        },
        removeFromCart : (state, action) => {
            state.cart = state.cart.filter((item =>{
                return item.id != action.payload.id
            }))
        }
    }
})

export const {addToCart, removeFromCart} = CartSlice.actions

export default CartSlice.reducer