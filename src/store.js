import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './features/user/userSlice'
import cartReducer from './features/cart/cartSlice'
const isDevelopment = import.meta.env.MODE === 'development';

const store = configureStore({
    reducer:{
        user: userReducer,
        cart: cartReducer
    },
    devTools: isDevelopment, 
    }
)
export default store