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
        },
        Increment:(state,actions)=>{
            for(let i=0;i<state.cart.length;i++){
                if(state.cart[i].id==actions.payload.id){
                    state.cart[i].qty++;
                }
            }
        },
        Decrement:(state,actions)=>{
            for(let i=0;i<state.cart.length;i++){
                if(state.cart[i].id==actions.payload.id){
                    if(state.cart[i].qty<=1){
                        alert("You are not able do less more then one please select one item")
                    }
                    else{
                        state.cart[i].qty--;
                    }
                }
            }
        },
        DeleteItem:(state,actions)=>{
         state.cart= state.cart.filter(key=>key.id!=actions.payload.id);
            alert("Your Product Is Deleted Successfully");
            
        }
    }
})



export const {Addtocart, Increment, Decrement, DeleteItem} = Carts.actions;
export default Carts.reducer;