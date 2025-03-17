import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    productId:'',
    cart:[]
}

const slice = createSlice({
    name:'vegefood',
    initialState,
    reducers:{
       setProductId : (state,{payload})=>{
        state.productId = payload
       },
       addCart: (state,{payload})=>{
        if(state.cart.find((item)=>item._id === payload._id)){
            state.cart = state.cart.map((item)=>{
                if(item._id === payload._id){
                    return {...item,quantityNum:item.quantityNum++}
                }else{
                    return item
                }
            })
        }else{

            state.cart = [...state.cart,{...payload,quantityNum:1}]
        }
       },
       removeCart: (state,{payload})=>{
        state.cart = state.cart.filter((item)=>item._id !== payload)
       }
    }
})

export const {setProductId,addCart,removeCart} = slice.actions

export default slice.reducer