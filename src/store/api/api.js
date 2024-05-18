import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { getSearchId, getTickets } from "../../services/services";

export const ticketsApi = createApi({
    reducerPath: 'ticketsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://aviasales-test-api.kata.academy'
    }),
    endpoints: build =>({
        getSearchId: build.query({
            query: ()=>({
             url: '/search'
            })
        }),
    getTickets: build.query({
         query: id=>({
            url: `/tickets?searchId=${id}`
         })
       })
    })
})