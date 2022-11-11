import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const singleOrder = createAsyncThunk('singleOrder', async (orderId) => {
    try {
        const { data } = await axios.get(`/api/orders/${orderId}`)
        return data
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

export const updateOrder = createAsyncThunk('updateOrder', async ({ id, totalPrice, shippingAddress, orderStatus, userId }) => {
    try {
        const { data } = await axios.put(`/api/orders/${orderId}`, { id, totalPrice, shippingAddress, orderStatus, userId })
        return data
    } catch (err) {
        console.log(err)
    }
});


const singleOrderSlice = createSlice({
    name: 'order',
    initialState:{
        order: {},
        loading: false
    },
    
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(singleOrder.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(singleOrder.fulfilled, (state, action) => {
            state.loading = false
            state.order = action.payload
        });
        builder.addCase(filteredOrdersByStatus.fulfilled, (state, action) => {
            state.order = action.payload
        })
        builder.addCase(updateOrder.fulfilled, (state, action) => {
            state.order = action.payload
        });

    }
})
export const selectSingleOrder = (state) => {
    return state.singleOrder;
};
export default singleOrderSlice.reducer