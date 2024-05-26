import React from 'react'
import {Card, Col, Row, Space} from 'antd'

const logos  ={
  "S7": "/link",
  "": "",
}

const AviaCard = ({ ticket }) => {
  return (
    <div>AviaCard
   <Space direction="vertical" size={16}>
    <img src={logos[ticket.carrier]} />
    <Card
      title={<><p><span>{ticket.price}P </span>
      <span> {ticket.carrier}</span></p></>}
      // extra={<a href="#">More</a>}
      style={{
        width: 502,
        height: 184
      }}
    >
      <p>пересадки {ticket.segments[0].stops.length}</p>
      <p>{ticket.segments[0].origin}-{ticket.segments[0].destination}</p>
      <p>время вылета{ticket.segments[0].date} время в пути{ticket.segments[0].duration}</p>
      <p>пересадки {ticket.segments[1].stops.length}</p>
      <p>{ticket.segments[1].origin}-{ticket.segments[1].destination}</p>
      <p>время вылета{ticket.segments[1].date} время в пути{ticket.segments[1].duration}</p>

        
      <ul>{ticket.segments?.map(({ date, duration }) => 
        <li key={date}>{duration}</li>
      )}</ul>
    </Card>

  </Space>
    </div>
  )
}

export default AviaCard