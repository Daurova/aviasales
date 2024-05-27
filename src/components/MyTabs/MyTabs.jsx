import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { ticketSlice, sortedByPriceSelector } from '../../store/reducers/ticketReducer';
import { Tabs, Flex, Radio } from 'antd';

const MyTabs = () => {
  const dispatch = useDispatch()

  const sortedByPrice = useSelector(sortedByPriceSelector)

  const onChange = (e) => {
    dispatch(ticketSlice.actions.toggleSortedByPrice(e.target.value))
  };

  return (
    <div>
        <Radio.Group onChange={onChange} value={sortedByPrice} buttonStyle='solid'>
        <Radio.Button value="a">Самый дешевый</Radio.Button>
        <Radio.Button value="b">Самый быстрый</Radio.Button>
      </Radio.Group>
      </div>
  )
}

export default MyTabs