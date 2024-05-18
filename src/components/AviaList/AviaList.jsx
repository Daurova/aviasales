import React from 'react'
import AviaCard from '../AviaCard/AviaCard'
import {Button} from 'antd'
import {useGetTicketsQuery} from '../../store/api/api'

const AviaList = () => {
  
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