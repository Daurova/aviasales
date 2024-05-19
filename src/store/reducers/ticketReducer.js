import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit"


import { getTickets, getSearchId } from '../../services/services'

const initialState={
    tickets: [],
    isLoading: false,
    error: '',

    stopsCount: []
}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        toggleStop: (state, action) => {
            if (state.stopsCount.includes(action.payload)) {
                state.stopsCount = state.stopsCount.filter((stopCount) => stopCount !== action.payload)
            } else {
                state.stopsCount.push(action.payload);
            }
        },
        resetStops: (state) => {
            state.stopsCount = []
        }
    },
    extraReducers: ({ addCase }) => {
        addCase(getTicketsAction.pending, (state) => {
            state.isLoading = true
        })
        addCase(getTicketsAction.fulfilled, (state, action) => {
            state.tickets = action.payload
            state.isLoading = false
        })
        addCase(getTicketsAction.rejected, (state, action) => {
            state.error = "Ошибка"
            state.isLoading = false
        })
    }
})


// Actions
export const getTicketsAction = createAsyncThunk(`ticket/getTicketsAction`, async () => {
    const searchId = await getSearchId();

    const ticketsResponse = await getTickets(searchId);

    return ticketsResponse.tickets;
})

// Selectors
export const stopsCountSelector = (state) => state.tickets.stopsCount;
export const ticketsSelector = (state) => state.tickets.tickets;

export const filteredTicketsSelector = createSelector(ticketsSelector, stopsCountSelector, (tickets, stopsCount) => {
    if (stopsCount.length === 0) {
        return tickets;
    }

    return tickets.filter((ticket) => {
        const ticketStopsCount = ticket.segments?.reduce((accumulate, segment) => {
            return accumulate + segment.stops.length;
        }, 0)

        console.log({ticket, ticketStopsCount, checkedStops: stopsCount, isFiltered: stopsCount.includes(ticketStopsCount) });

        return stopsCount.includes(ticketStopsCount);
    })
})