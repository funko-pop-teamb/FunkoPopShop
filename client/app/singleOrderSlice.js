import { createSlice, createAsyncThunk } from '@reactjs/toolkit'
import axios from 'axios'

export const singleOrder = createAsyncThunk('singleOrder', async (orderId) => {
    const {data} = await axios.get()
    return data
})

export const updateOrder = createAsyncThunk('updateOrder', async ({id, totalPrice, shippingAddress, orderStatus, userId}) => {
    const { data } = await axios.put()
    return data
})

const singleOrderSlice = createSlice({
    name: 'order',
    initialState: {
        order: {},
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(singleOrder.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(singleOrder.fulfilled, (state, action) => {
            state.loading = false
            state.order = action.payload
        })
        builder.addCase(updateOrder.fulfilled, (state, action) => {
            state.order = action.payload
        })
    }
})

export default singleOrderSlice.reducer