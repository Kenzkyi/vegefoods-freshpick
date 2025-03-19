import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import  slice  from "./slice";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from './slice'
// import { version } from "react";
 
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

// const reducer = combineReducers({
//   favorites : rootReducer
// })
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 


export const store = configureStore({
    reducer: persistedReducer
})