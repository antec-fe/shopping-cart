import { configureStore } from "@reduxjs/toolkit";

import shoppingCartReducer from './shoppingCartSlice' 
import productReducer from './productSlice' 

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
        product: productReducer
    }
})

export default store