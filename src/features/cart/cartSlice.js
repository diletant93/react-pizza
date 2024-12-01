import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart:[],
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            state.cart.push(action.payload)
        },
        deleteItem(state,action){
            state.cart = state.cart.filter(item=> action.payload !== item.pizzaId)
        },
        increaseItemQuantity(state,action){
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity += 1
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state,action){
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity -= 1
            item.totalPrice = item.quantity * item.unitPrice
            if(item.quantity === 0) {
                cartSlice.caseReducers.deleteItem(state,action)
            }
        },
        clearCart(state){
            state.cart = []
        },
    },
    }
)

const getTotalPrice = (store) => store.cart.cart.reduce((acc, nextItem)=> acc + nextItem.totalPrice, 0)
const getTotalQuanity = (store) => store.cart.cart.reduce((acc, nextItem)=> acc + nextItem.quantity, 0)
const getCart = (store) => store.cart.cart
const getCurrentQuantityById = id => store => store.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0


export {getTotalPrice, getTotalQuanity, getCart, getCurrentQuantityById}

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer