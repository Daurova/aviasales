import React from 'react'
import AviaCard from '../AviaCard/AviaCard'
import {Button} from 'antd'
import { useSelector } from 'react-redux'
import { filteredTicketsSelector } from '../../store/reducers/ticketReducer'

const AviaList = () => {
  const tickets = useSelector(filteredTicketsSelector)

  return (
    <div>
            AviaList
      {tickets.map(ticket => <AviaCard key={`${ticket.price}_${ticket.carrier}`} ticket={ticket}></AviaCard>)}
      <Button type="primary" block>
      Показать еще 5 билетов
      </Button>
    </div>
  )
}

export default AviaList