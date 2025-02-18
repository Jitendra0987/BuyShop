import {configureStore} from "@reduxjs/toolkit";

import myReducer  from "./Cartslice"

const store=configureStore({
    reducer:{
        mycart:myReducer
    }
})
export default store;