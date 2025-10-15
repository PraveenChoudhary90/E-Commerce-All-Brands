import { createSlice } from "@reduxjs/toolkit";

const Carts = createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        Addtocart:(state, actions)=>{
        console.log(actions.payload);
        const CartData = state.cart.filter(key=>key.id==actions.payload.id);

        if(CartData.length>=1){
            alert("You Have Already Select the Product")
        }
        else{
            state.cart.push(actions.payload);
        }
        }
    }
})



export const {Addtocart} = Carts.actions;
export default Carts.reducer;