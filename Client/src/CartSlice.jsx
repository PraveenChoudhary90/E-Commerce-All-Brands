import { createSlice } from "@reduxjs/toolkit";

const Carts = createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        Addtocart:(state, action)=>{
            console.log(action.payload);
        }
    }
})



export const {Addtocart} = Carts.actions;
export default Carts.reducer;