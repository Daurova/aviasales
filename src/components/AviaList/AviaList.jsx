import React from 'react'
import { useEffect } from 'react'
import AviaCard from '../AviaCard/AviaCard'
import {Button} from 'antd'
import {useGetTicketsQuery} from '../../store/api/api'
import { useDispatch } from 'react-redux'
import { ticketSlice } from '../../store/reducers/ticketReducer'


const AviaList = ({ searchId }) => {
  const dispatch = useDispatch()
  const { data, isLoading, isFetching, error } = useGetTicketsQuery(searchId); 
  useEffect(() => {


}, []);
  return (
    <div>
            AviaList
      <AviaCard></AviaCard>
      <Button type="primary" block>
      Показать еще 5 билетов
      </Button>
    </div>
  )
}

export default AviaList

// useEffect(() => {
//   // Trigger the fetching of ticket data when the component mounts
//   // The query will be dispatched automatically
// }, []);

// useEffect(() => {
//   if (data) {
//     console.log(data); // Log the fetched ticket data
//   }
// }, [data]);

// if (isLoading) return <p>Loading...</p>; // Display loading state while fetching data

// if (error) return <p>Error: {error.message}</p>; // Display error message if fetching fails

// return (
//   <div>
//     <h1>Tickets</h1>
//     {data && data.map(ticket => (
//       <div key={ticket.id}>
//         <p>{ticket.name}</p>
//         {/* Render other ticket details */}
//       </div>
//     ))}