import React from 'react'
import AviaCard from '../AviaCard/AviaCard'
import {Button} from 'antd'
import { useSelector } from 'react-redux'
import { sortedTicketsSelector, isLoadingSelector } from '../../store/reducers/ticketReducer'

const AviaList = () => {
  // хуки `useSelector` для получения данных из хранилища Redux. 
  // Переменные `tickets` и `isLoading` получаются из хранилища
  // с помощью селекторов.
  const tickets = useSelector(sortedTicketsSelector)
  const isLoading = useSelector(isLoadingSelector)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
            AviaList
            {/* Каждый билет передается в компонент `AviaCard` в качестве свойства `ticket`, 
            а ключ для каждого элемента уникален и создается на основе цены и перевозчика  */}
      {tickets.map(ticket => <AviaCard key={`${ticket.price}_${ticket.carrier}_${ticket.segments[0].date}`} ticket={ticket}></AviaCard>)}
      <Button type="primary" block>
      Показать еще 5 билетов
      </Button>
    </div>
  )
}

export default AviaList