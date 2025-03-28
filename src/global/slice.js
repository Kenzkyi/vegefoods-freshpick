import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    productId:'',
    cart:[],
    totalValue:0,
    userToken:'',
    userId:'',
    totalAmount:0,
    countDown:{
      days:-1907,
      hours:8,
      mins:1,
      secs:10
    }
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
            state.cart = state.cart.map((item)=>item._id === payload._id ? {...item,quantityNum:item.quantityNum+1} : item)
        }else{
            state.cart = [...state.cart,{...payload,quantityNum:1}]
        }
       },
       removeCart: (state,{payload})=>{
        const obj = state.cart.find((item)=>item._id === payload)
        if(obj.quantityNum > 1){
            state.cart = state.cart.map((item)=>item._id === payload ? {...item,quantityNum:item.quantityNum-1} : item)
        }else{
            state.cart = state.cart.filter((item)=>item._id !== payload)
        }
       },
       setTotalValue: (state,{payload})=>{
        state.totalValue = payload
       },
       setUserToken: (state,{payload})=>{
        state.userToken = payload
       },
       setUserId : (state,{payload})=>{
        state.userId = payload
       },
       removeUserInfo : (state)=>{
        state.userId = ''
        state.userToken = ''
        state.productId = ''
       },
       setCountDown: (state)=>{
        if (state.countDown.secs === 0) {
            state.countDown.mins--
            state.countDown.secs = 59 
            return;   
        }
        if (state.countDown.mins === 0) {
            state.countDown.hours--
            state.countDown.mins = 59 
            return;
        }
        if (state.countDown.hours === 0) {
            state.countDown.days--
            state.countDown.secs = 59 
            return   
        }
            state.countDown.secs--
       }
    }
})

export const {setProductId,addCart,removeCart,setTotalValue,setUserId,setUserToken,removeUserInfo,setCountDown} = slice.actions

export default slice.reducer