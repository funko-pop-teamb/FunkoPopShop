import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleUser = createAsyncThunk("singleUser", async (id) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    console.log(data)
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const fetchUserOrders = createAsyncThunk('singleUserOrders',
async (id) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/orders`);
      return data;
    } catch (err) {
      console.log(err);
    }
  });

const singleUserSlice = createSlice({
  name: "singleUser",
  initialState: { 
    info: {}, 
    orders: [] 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.info = action.payload;
      });
    builder.addCase(fetchUserOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
  }
});

export default singleUserSlice.reducer;