import React from 'react'
import {Card, Col, Row, Space} from 'antd'

const AviaCard = ({ ticket }) => {
  return (
    <div>
   <Space direction="vertical" size={16}>
    
    <Card
      title={ticket.carrier}
      // extra={<a href="#">More</a>}
      style={{
        width: 502,
        height: 184
      }}
    >
      {ticket.price}
    </Card>

  </Space>
    </div>
  )
}

export default AviaCard