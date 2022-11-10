import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleFunkoPop = createAsyncThunk(
    "fetchSingleFunkPop", async ( funkoId  ) => {
        try {
            const { data } = await axios.get(`/api/funkoPop/${funkoId}`);
            return data;
        } catch (err) {
            console.log(err);
        }
    });
export const updateFunkoPop = createAsyncThunk(
    "updateFunkoPop", async ({ funkoId, name, category, price, imageUrl, size, edition, description }) => {
        try {
            const { data } = await axios.put(`/api/funkoPop/${funkoId}`, {
                name,
                category,
                price,
                imageUrl,
                size,
                edition,
                description
            });
            return data;
        } catch (err) {
            console.log(err);
        }
    });

const singleFunkoPop = createSlice({
    name: "singleFunkoPop",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleFunkoPop.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(updateFunkoPop.fulfilled, (state, action) => {
                return action.payload;
            })
    },
});
export const selectSingleFunkoPop = (state) => {
    return state.singleFunkoPop;
};
export default singleFunkoPop.reducer;