import { configureStore, createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addList:(state, action)=>{
            state.push(action.payload)
        },
        removeList:(state, action)=>{
            return state.filter(item=> item.id!==action.payload)
        }
    }
})

export const{addList, removeList} = wishlistSlice.actions;

const store=configureStore({
    reducer:{
        wishList:wishlistSlice.reducer
    }
})

export default store;