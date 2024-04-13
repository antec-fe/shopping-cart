import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        list: [],
        status: 'idle', //idle, loading, succeeded, failed
        error: null
    },
    extraReducers(builder) {
        builder
            .addCase(fetchList.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchList.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.list = action.payload.products
            })
            .addCase(fetchList.rejected, (state) => {
                state.status = 'failed'
                state.error = 'Request failed'
            })
    }
})

export const fetchList = createAsyncThunk('product/fetchList', async () => {
    const response = await fetch('https://dummyjson.com/products')
    return await response.json()
})

// export const { } = productSlice.actions

export default productSlice.reducer