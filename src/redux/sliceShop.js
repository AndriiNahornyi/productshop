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
    removeProduct: (state, action) => {
      state.basket = state.basket.filter(item => item.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;
