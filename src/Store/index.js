import { configureStore } from '@reduxjs/toolkit'
// import  counterReducer from "./QuantitySlice"
import cartReducer from "../Store/CartStore/CartSlice"
import photoSlice from './Photos/PhotoSlice'
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    photosState: photoSlice,
    cart: cartReducer,
  }
})