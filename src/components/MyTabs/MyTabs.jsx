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
    <div>MyTabs
       {/* <Tabs type='line' tabBarStyle={{ background: '#f0f2f5', padding: '10px 24px' }} tabStyle={{ width: '120px', textAlign: 'center', background:'blue' }}>
         <TabPane tab="Самый дешевый" key="1">
           Content of Tab 1
         </TabPane>
         <TabPane tab="Самый быстрый" key="2">
           Content of Tab 2
         </TabPane>
         </Tabs> */}
      <Radio.Group onChange={onChange} value={sortedByPrice}>
        <Radio.Button value="a">Самый дешевый</Radio.Button>
        <Radio.Button value="b">Самый быстрый</Radio.Button>
      </Radio.Group>
      </div>
  )
}

export default MyTabs