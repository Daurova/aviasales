import React from 'react'
import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ticketSlice } from '../../store/reducers/ticketReducer';
import { stopsCountSelector } from '../../store/reducers/ticketReducer';

const Filter = () => {
  const dispatch = useDispatch();
 
  const stopsCount = useSelector(stopsCountSelector);

  return (
    <div>Filter
      <br/>
      <Checkbox checked={stopsCount.length === 0} onChange={() => {
        dispatch(ticketSlice.actions.resetStops())
      }}>Все</Checkbox>
      <br />
      <Checkbox checked={stopsCount.length === 0 || stopsCount.includes(0)} onChange={() => {
        dispatch(ticketSlice.actions.toggleStop(0))
      }} >Без пересадки</Checkbox>
      <br />
      <Checkbox  checked={stopsCount.length === 0 || stopsCount.includes(1)} onChange={() => {
        dispatch(ticketSlice.actions.toggleStop(1))
      }} >1 пересадка</Checkbox>
      <br />
      <Checkbox  checked={stopsCount.length === 0 || stopsCount.includes(2)} onChange={() => {
        dispatch(ticketSlice.actions.toggleStop(2))
      }} >2 пересадки</Checkbox>
      <br />
      <Checkbox  checked={stopsCount.length === 0 || stopsCount.includes(3)} onChange={() => {
        dispatch(ticketSlice.actions.toggleStop(3))
      }} >3 пересадки</Checkbox>
      <br/>
      </div> 

    // <div>
    // <input type="checkbox" onClick={onFilterClick} />
    // <br></br>
    // <input type="checkbox" onClick={onFilterClick} />
    // <br />
    // <input type="checkbox" onClick={onFilterClick} />
    // <br />
    // <input type="checkbox" onClick={onFilterClick} />
    // <br />
    // <input type="checkbox" onClick={onFilterClick} />
    // </div>
  )
}

export default Filter;
