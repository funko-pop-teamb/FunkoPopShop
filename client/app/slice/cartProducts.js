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
    "fetchSingleOrderProduct", async (funkoId,orderId) => {
      try {
        const { data } = await axios.get(`/api/orderFunkoPop/filterByOrderIdAndUserId/${orderId}/${funkoId}`);
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
const singleOrderWithFunkoPopSlice = createSlice({
  name: "funkoPops",
  initialState: {
    items:[],
    funkoPops:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllCartFunkos.fulfilled, (state, action) => {
      return action.payload;
    })
   

  },
});
export const selectOrderFunkoPop = (state) => {
  return state.singleOrderProduct;
};
export default singleOrderWithFunkoPopSlice.reducer;