import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: {
    selectedColors: [],
  },
  reducers: {
    selectColors: (state, action) => {
      const color = action.payload;

      if (state.selectedColors.includes(color)) {
        state.selectedColors = state.selectedColors.filter((colorItem) => {
          return colorItem !== color;
        });
      } else {
        state.selectedColors.push(color);
      }
    },
  },
});

export const { selectColors } = colorSlice.actions;

export default colorSlice;
