import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    // setCartItems: (state, action) => {
    //   state.cartItems = action.payload;
    // },
    addToCart: (state, action) => {
      const cartItem = action.payload;

      const existingCartItem = state.cartItems.find(
        (item) =>
          item.product.id === cartItem.product.id && item.size === cartItem.size
      );

      if (existingCartItem && existingCartItem.size === cartItem.size) {
        existingCartItem.quantity += cartItem.quantity;
      } else {
        state.cartItems.push(cartItem);
      }
    },
    removeFromCart: (state, action) => {
      const cartItem = action.payload;

      const existingCartItemIndex = state.cartItems.findIndex(
        (item) =>
          item.product.id === cartItem.product.id && item.size === cartItem.size
      );
      state.cartItems.splice(existingCartItemIndex, 1);
    },
    changeAmount: (state, action) => {
      const cartItem = action.payload.cartItem;
      const newQuantity = action.payload.newQuantity;

      const existingCartItem = state.cartItems.find(
        (item) =>
          item.product.id === cartItem.product.id && item.size === cartItem.size
      );

      existingCartItem.quantity = +newQuantity;
    },
  },
});

export const { setCartItems, addToCart, removeFromCart, changeAmount } =
  cartSlice.actions;

export default cartSlice;
