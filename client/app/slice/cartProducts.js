import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCartFunkos = createAsyncThunk(
  "fetchAllCartFunkos", async (orderId) => {
    try {
      const { data } = await axios.get(`/api/orderFunkoPop/filterByOrderId/${orderId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  });
  export const updateOneOrderOneFunko = createAsyncThunk(
    "updateOneOrderOneFunko", async ({FunkoPopId,orderId, quantity, funkoPrice}) => {
      try {
        const { data } = await axios.put(`/api/orderFunkoPop/filterByOrderIdAndFunkoId/${orderId}/${FunkoPopId}`,{quantity,funkoPrice});
        return data;
      } catch (err) {
        console.log(err);
      }
    });
    export const addItemToCart = createAsyncThunk(
      "addItemToCart", async ({FunkoPopId, orderId,quantity,funkoPrice}) => {
        try {
          const { data } = await axios.post(`/api/orderFunkoPop`,{
            FunkoPopId, orderId,quantity,funkoPrice
          });
          return data;
        } catch (err) {
          console.log(err);
        }
      });
      export const filteredOrdersByStatus = createAsyncThunk('filteredOrdersByStatus', async (userId) => {
        try {
        const { data } = await axios.get(`/api/orders/filter/status/${userId}/cart`)
        return data
    } catch (err) {
        console.log(err);
    }
    })
const singleOrderWithFunkoPopSlice = createSlice({
  name: "funkoPops",
  initialState: {
    items:[],
    cart:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllCartFunkos.fulfilled, (state, action) => {
      state.items= action.payload;
    })
    .addCase(updateOneOrderOneFunko.fulfilled, (state, action) => {
      state.items= action.payload;
    })
    .addCase(addItemToCart.fulfilled, (state, action) => {
      state.items.push(action.payload)
    })
    .addCase(filteredOrdersByStatus.fulfilled, (state, action) => {
      state.cart = action.payload
  })
  },
});


export const selectOrderFunkoPop = (state) => {
  return state.singleOrderProduct;
};
export default singleOrderWithFunkoPopSlice.reducer;