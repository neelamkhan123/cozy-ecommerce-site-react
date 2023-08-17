import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
  wishlistTotalQuantity: 0,
  wishlistQuantity: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleItem(state, action) {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.wishlistItems.splice(itemIndex, 1);
      } else {
        const tempProd = {
          ...action.payload,
          wishlistTotalQuantity: 1,
        };
        state.wishlistItems.push(tempProd);
      }

      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
    deleteItem(state, action) {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.wishlistItems.splice(itemIndex, 1);

      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
  },
});

export const { toggleItem, deleteItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
