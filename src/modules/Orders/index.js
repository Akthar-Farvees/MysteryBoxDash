import React from 'react'
import orders from '../../assests/data/orders.json';
import { Card, List, Table, Tag } from 'antd';
import '../../index.css';

const Orders = () => {
    const renderOrderStatus = (orderStatus) => {
        if (orderStatus === "Accepted"){
            return <Tag color={'green'}>{orderStatus}</Tag>
        }

        if (orderStatus === "Pending") {
            return <Tag color={'orange'}>{orderStatus}</Tag>
        }

        if (orderStatus === "Declined") {
            return <Tag color={'red'}>{orderStatus}</Tag>
        }
    }

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
            render: renderOrderStatus,
        },
    ]
     
  return (
    <Card title={"Orders"} style={{margin: 20,}}>
        <Table 
        dataSource={orders}
        columns={dataColumns}
        rowKey = "orderID"
        />
    </Card>
  )
}

export default Orders;
