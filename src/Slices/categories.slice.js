import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    selectedCategories: [],
  },
  reducers: {
    selectCategories: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories?.includes(category)) {
        state.selectedCategories = state.selectedCategories?.filter(
          (item) => item !== category
        );
      } else {
        state.selectedCategories?.push(category);
      }
    },
  },
});

export const { selectCategories } = categorySlice.actions;

export default categorySlice;
