import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    productId:''
}

const slice = createSlice({
    name:'vegefood',
    initialState,
    reducers:{
       setProductId : (state,{payload})=>{
        state.productId = payload
       }
    }
})

export const {setProductId} = slice.actions

export default slice.reducer