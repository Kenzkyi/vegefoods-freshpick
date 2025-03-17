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
                let count = item._id.quantityNum === undefined? 1 : item._id.quantityNum
                console.log(item._id.quantityNum,count)
                if(item._id === payload._id){
                    return {...item,quantityNum:count++}
                }else{
                    return item
                }
            })
        }else{

            state.cart = [...state.cart,payload]
        }
       },
       removeCart: (state,{payload})=>{
        state.cart = state.cart.filter((item)=>item._id !== payload)
       }
    }
})

export const {setProductId,addCart,removeCart} = slice.actions

export default slice.reducer