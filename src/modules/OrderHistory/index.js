import React from 'react'
import { Card, List, Table, Tag } from 'antd';
import '../../index.css';
import ordersHistory from '../../assests/data/orders-history.json';

const OrderHistory = () => {

    const dataColumns = [
      {
          title: "Order",
          dataIndex: "orderID",
          key: "orderID"
      },
      {
          title: "Delivery Address",
          dataIndex: "deliveryAddress",
          key: "deliveryAddress"
      },
      {
          title: "price",
          dataIndex: "price",
          key: "price",
          render: (price) => `${price} $`
      },
      {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: (status) => (
          <Tag color={status === 'Delivered' ? 'green' : 'red'}>{status}</Tag>
          )      
        },
  ]


  return (
      <Card title={"Order History"} style={{margin: 20,}}>
          <Table 
          dataSource={ordersHistory}
          columns={dataColumns}
          rowKey = "orderID"
          />
      </Card>

    )
}

export default OrderHistory;