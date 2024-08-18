import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
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
    removeFromCart: (state, action) => {},
    increaseAmount: (state, action) => {},
    decreaseAmount: (state, action) => {},
  },
});

export const { addToCart, removeFromCart, increaseAmount, decreaseAmount } =
  cartSlice.actions;

export default cartSlice;
