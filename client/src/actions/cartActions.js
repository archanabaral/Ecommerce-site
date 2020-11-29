import axios from "axios"
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants"

export const addToCart = (productId, qty) =>async (dispatch, getState) =>{
    const {data} = await axios.get(`/api/products/${productId}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty
        }
    })
    //to save cartItems even after refreshing page save it to localStorage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (productId) =>async(dispatch,getState)=>{
    dispatch({type:CART_REMOVE_ITEM ,payload:productId})
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

