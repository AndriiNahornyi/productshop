import { createSlice } from '@reduxjs/toolkit';
const shopInitialState = {
  basket: [],
};
const shopSlice = createSlice({
  name: 'shop',
  initialState: shopInitialState,
  reducers: {
    addProduct: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
  },
});

export const { addProduct } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;
