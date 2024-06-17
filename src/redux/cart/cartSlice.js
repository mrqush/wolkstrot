import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
    items: [],
  },
  reducers: {
    addItem: (state, item) => {
      state.items.push(item.payload);
      state.value += 1;
    },
    deleteItem: (state, _id) => {
      state.items = state.items.filter(item => item._id !== _id.payload);
      state.value -= 1;
    },
    clearCart: (state) => {
      state.items = [];
      state.value = 0;
    }
  },
});

export const { incrementByAmount, addItem, deleteItem, clearCart } = cartSlice.actions;

export const itemsCount = (state) => state.cart.value;
export const items = (state) => state.cart.items;

export default cartSlice.reducer;
