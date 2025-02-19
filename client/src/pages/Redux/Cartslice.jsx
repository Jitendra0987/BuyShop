import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },

    reducers:{
        addtoCart:(state, actions)=>{
        const proData = state.cart.filter((key)=>key.id==actions.payload.id);
        if(proData.length>=1)
        {
              alert("product aleredy added!!")
        }
        state.cart.push(actions.payload)
        alert("product succesfulley added!!!!")


        }}
        
    })
    
    
    export const {addtoCart} = cartSlice.actions;
    export default cartSlice.reducer;