import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFunkoPops = createAsyncThunk(
  "fetchFunkoPops", async () => {
    try {
      const { data } = await axios.get(`/api/funkoPop`);
      return data;
    } catch (err) {
      console.log(err);
    }
  });

export const addFunkoPop = createAsyncThunk(
  "addFunkoPop", async ({name,category,price,imageUrl,size,edition, description}) => {
    try {
      const { data } = await axios.post(`/api/funkoPop`, {
        name,category,price,imageUrl,size,edition, description
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  });
export const deleteFunkoPop = createAsyncThunk(
  "deleteFunkoPop", async (funkoId) => {
    try {
      const { data } = await axios.delete(`/api/funkoPop/${funkoId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  });
export const fetchFunkoPopByCategory = createAsyncThunk(
  "fetchFunkoPopByCategory", async (category) => {
    try {
      const { data } = await axios.get(`/api/funkoPop/filter/${category}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  });

  export const fetchFunkoPopByFunkoId = createAsyncThunk(
    "fetchFunkoPopByFunkoId", async (funkoId) => {
      try {
        const { data } = await axios.get(`/api/funkoPop/${funkoId}`);
        return data;
      } catch (err) {
        console.log(err);
      }
    });


const allFunkoPopsSlice = createSlice({
  name: "funkoPops",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchFunkoPops.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase(addFunkoPop.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase(deleteFunkoPop.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase(fetchFunkoPopByCategory.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase(fetchFunkoPopByFunkoId.fulfilled, (state, action) => {
      return action.payload;
    })

  },
});
export const selectFunkoPops = (state) => {
  return state.allFunkoPops;
};
export default allFunkoPopsSlice.reducer;