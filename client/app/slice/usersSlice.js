import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const { data } = await axios.get("/api/users");
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const postUser = createAsyncThunk("postUser", async (payload) => {
  try {
    const { data } = await axios.post("/api/users", payload);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteUser = createAsyncThunk("/api/users", async (id) => {
  const { data } = await axios.delete(`http://localhost:8080/api/users/${id}`);
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state = action.payload;
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      const newState = state.filter((user) => user.id !== action.payload.id);
      return newState;
    });
  },
});
export default usersSlice.reducer;