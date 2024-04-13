import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        isVisible: true,
        products: []
    },
    reducers: {
        toggle: (state) => {
            state.isVisible = !state.isVisible
        }
    }
})

export const { toggle } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer