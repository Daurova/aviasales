import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { ticketSlice } from "./reducers/ticketReducer";

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReducer, 
        // middleware: getDefaultMiddleware(),
        // middleware: (getDefualtMiddleware)=>{}
    })
}



