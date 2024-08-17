import { configureStore } from "@reduxjs/toolkit";

// Slices
import categorySlice from "./Slices/categories.slice";
import colorSlice from "./Slices/colors.slice";
import sizeSlice from "./Slices/sizes.slice";

const store = configureStore({
  reducer: {
    categories: categorySlice.reducer,
    colors: colorSlice.reducer,
    sizes: sizeSlice.reducer,
  },
});

export default store;
