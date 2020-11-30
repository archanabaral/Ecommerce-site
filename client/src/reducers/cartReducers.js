import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (value) => value.product === item.product
      );
      if (existItem) {
        return {
          ...state,
          //  if previous product is same as new product return new product
          cartItems: state.cartItems.map((value) =>
            value.product === existItem.product ? item : value
          ),
        };
      } else {
        //concatenate cartItems with new item (item) if there are 2 itms in cartItem than if we add new item it will be 3
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAdress: action.payload,
      };

    default:
      return state;
  }
};
