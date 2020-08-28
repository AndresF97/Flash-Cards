import React,{createContext, useReducer, useContext} from "react"
import {
    EX_FIRST_STACK,
    EX_SECOND_STACK,
    EX_THIRD_STACK,
    SEARCH_CAT,
    SEARCH_TERM
} from "./actions"

const StoreContext = createContext();
const { Provider } = StoreContext;
const reducer = (state, action) =>{
    
}