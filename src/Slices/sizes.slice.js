import { createSlice } from "@reduxjs/toolkit";

const sizeSlice = createSlice({
  name: "size",
  initialState: {
    selectedSizes: [],
  },
  reducers: {
    selectSizes: (state, action) => {
      const size = action.payload;

      if (state.selectedSizes.includes(size)) {
        state.selectedSizes = state.selectedSizes.filter((sizeitem) => {
          return sizeitem !== size;
        });
      } else {
        state.selectedSizes.push(size);
      }
    },
  },
});

export const { selectSizes } = sizeSlice.actions;

export default sizeSlice;
