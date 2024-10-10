import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";


export const Store = configureStore({
    reducer:{
        cart: CartSlice
        
    }
})