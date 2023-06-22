import React from 'react'
import { Button, Card, Layout, Table } from 'antd';
import dishes from '../../assests/data/dishes.json'
import { Link } from 'react-router-dom';
import '../../index.css';

const RestaurantMenu = () => {
  const tableColumns = [
    {
      title: "Menu Items",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price} $`
    },
    {
      title: "Actions",
      key: "actions",
      render: () => <Button danger>Remove</Button>
    }
  ]

  const renderNewItemButton = () => {
    return (
      <Link to={'create'}>
        <Button type='primary'>New Item</Button>
      </Link>
    
      ) 
  }
  return (
    <Card title={"Menu"} style={{margin: 20,}} extra={renderNewItemButton()} >
      <Table dataSource={dishes} columns={tableColumns} rowKey="id" />
    </Card>
  )
}

export default RestaurantMenu