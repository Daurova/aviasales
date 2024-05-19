import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
// import { ticketsApi } from "./api/api";

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReducer, 
        // middleware: getDefaultMiddleware(),
        // middleware: (getDefualtMiddleware)=>{}
        // middleware: (getDefaultMiddleware) =>
            // getDefaultMiddleware().concat(ticketsApi.middleware)
    })
}





