import React from 'react'
import {Card, Col, Row, Space} from 'antd'
import { format, formatDuration, intervalToDuration } from 'date-fns'

const logos  ={
  "S7": "https://pics.avs.io/99/36/S7.png",
  "AK": "https://pics.avs.io/99/36/AK.png",
  'BT': 'https://pics.avs.io/99/36/BT.png',
  'DP': 'https://pics.avs.io/99/36/DP.png',
  'FV': 'https://pics.avs.io/99/36/FV.png',
  'U6': 'https://pics.avs.io/99/36/U6.png',
  'UT': 'https://pics.avs.io/99/36/UT.png',
  'W6': 'https://pics.avs.io/99/36/W6.png'
}

const AviaCard = ({ ticket }) => {
  return (
    <div>
   <Space direction="vertical" size={16}>
    <Card
      title={<><p><span>{ticket.price}P </span>
      </p>
      <img src={logos[ticket.carrier]} />

      </>}
      
      // extra={<a href="#">More</a>}
      style={{
        width: 502,
        height: 284,
        margin:0, 
        padding:0
      }}
    >
      <p>пересадки {ticket.segments[0].stops.length}</p>
      <p>{(ticket.segments[0].stops).map((stop)=>(stop+' '))}</p>
      <p>{ticket.segments[0].origin}-{ticket.segments[0].destination}</p>
      <p>время вылета{format(new Date(ticket.segments[0].date), 'HH:mm')}  время в пути {`${Math.floor(ticket.segments[0].duration / 60)}ч ${ticket.segments[0].duration% 60}м`}</p>
      <p>пересадки {ticket.segments[1].stops.length}</p>
      <p>{(ticket.segments[1].stops).map((stop)=>(stop+' '))}</p>
      <p>{ticket.segments[1].origin}-{ticket.segments[1].destination}</p>
      <p>время вылета{format(new Date(ticket.segments[1].date), 'HH:mm')}  время в пути{`${Math.floor(ticket.segments[1].duration / 60)}ч ${ticket.segments[1].duration% 60}м`}</p>

        
    </Card>

  </Space>
    </div>
  )
}

export default AviaCard