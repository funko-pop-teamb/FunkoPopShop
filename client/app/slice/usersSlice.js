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

export const editUser = createAsyncThunk(
  "editUser", async({userId, username, firstName, lastName, email}) => {
    try{

      const {data} = await axios.put(`/api/users/${userId}`, {username,
      firstName, lastName, email })

      return data;
    }catch(err) {

      console.log(err)

    }



  })

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
    builder.addCase(editUser.fulfilled, (state, action) => {

      return action.payload;
    })
  },
});

export const selectSIngleUser = (state) => {

  return state.usersSlice

}

export default usersSlice.reducer;