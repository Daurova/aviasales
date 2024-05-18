import { createSlice } from "@reduxjs/toolkit"

const initialState={
    tickets: [],
    isLoading: false,
    error: '',
    searchId: ''
    }

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        setTickets: (state, {payload:tickets})=>{
          state.tickets = tickets
        },
        setSearchId: (state, {payload:searchId})=>{
            state.searchId = searchId
          }
    }
})     