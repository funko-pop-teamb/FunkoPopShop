import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk('fetchOrders', async () => {
    const { data } = await axios.get('/api/orders')
    return data
})

export const filteredOrders = createAsyncThunk('filteredOrders', async () => {
    const { data } = await axios.get(`/api/orders/filter/${userId}`)
    return data
})
export const addOrder = createAsyncThunk('addOrder', async () => {
    const { data } = axios.post('/api/orders')
    return data
})

export const deleteOrder = createAsyncThunk('deleteOrder', async () => {
    const { data } = await axios.delete(`/api/orders/${orderId}`)
    return data
})

const allOrderSlice = createSlice ({
    name: orders,
    initialState: {
        orders: [],
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.loading = false
            state.orders = action.payload
        })
        builder.addCase(addOrder.fulfilled, (state, action) => {
            state.orders.push(action.payload)
        })
        builder.addCase(deleteOrder.fulfilled, (state, action) => {
            const newState = state.orders.filter((order) => order.id !== action.payload)
            return newState
        })

    }
})

export default allOrderSlice.reducer