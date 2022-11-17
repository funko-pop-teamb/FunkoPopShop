import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const singleOrder = createAsyncThunk(
  "singleOrder", async (orderId) => {
    const { data } = await axios.get(`/api/orders/${orderId}`);
    return data;
  });

const appleSlice = createSlice({
  name: "funkoPops",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(singleOrder.fulfilled, (state, action) => {
        return action.payload;
      })
  },
});

export const selectFunkoPops = (state) => {
  return state.allFunkoPops;
};

export default appleSlice.reducer;