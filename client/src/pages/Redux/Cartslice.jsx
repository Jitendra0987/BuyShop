import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },

    reducers:{
        addtoCart:(state, actions)=>{



        }}
    })
    
    
    export const {addtoCart} = cartSlice.actions;
    export default cartSlice.reducer;