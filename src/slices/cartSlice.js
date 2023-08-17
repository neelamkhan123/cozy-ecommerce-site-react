import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartItemQuantity: 0,
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartItemQuantity++;
      } else {
        const tempProd = {
          ...action.payload,
          cartItemQuantity: 1,
        };
        console.log(tempProd);
        state.cartItems.push(tempProd);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    deleteItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cartItems.splice(itemIndex, 1);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increment(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cartItems[itemIndex].cartItemQuantity++;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decrement(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartItemQuantity <= 1) {
        state.cartItems.splice(itemIndex, 1);
      } else {
        state.cartItems[itemIndex].cartItemQuantity--;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartItemQuantity } = cartItem;
          const itemTotal = price * cartItemQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartItemQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, deleteItem, increment, decrement, getTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
