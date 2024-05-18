import React from 'react'
import { Checkbox } from 'antd';
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Filter = () => {
  return (
    <div>Filter
      <br/>
      <Checkbox onChange={onChange}>Все</Checkbox>
      <br />
      <Checkbox onChange={onChange}>Без пересадки</Checkbox>
      <br />
      <Checkbox onChange={onChange}>1 пересадка</Checkbox>
      <br />
      <Checkbox onChange={onChange}>2 пересадки</Checkbox>
      <br />
      <Checkbox onChange={onChange}>3 пересадки</Checkbox>
    </div>
  )
}

export default Filter
