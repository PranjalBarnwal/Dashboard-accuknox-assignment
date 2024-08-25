import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice"


const store=configureStore({
    reducer:{
        dataSlice:dataReducer
    }
})

export default store;