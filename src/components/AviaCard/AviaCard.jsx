import React from 'react'
import {Card, Col, Row, Space} from 'antd'

const AviaCard = () => {
  return (
    <div>
   <Space direction="vertical" size={16}>
    
    <Card
      title="Default size card"
      // extra={<a href="#">More</a>}
      style={{
        width: 502,
        height: 184
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>

  </Space>
    </div>
  )
}

export default AviaCard