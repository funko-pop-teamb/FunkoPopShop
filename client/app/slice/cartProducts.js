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

const singleOrderWithFunkoPopSlice = createSlice({
  name: "funkoPops",
  initialState: {},
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