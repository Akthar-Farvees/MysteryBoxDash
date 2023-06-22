import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom';
import '../../index.css'

const SideMenu = () => {
    const navigate = useNavigate();
    const menuItems = [
        {
            key: '/',
            label: 'Orders'
        },
        {
            key: 'menu',
            label: 'Menu'
        },
        {
            key: 'order-history',
            label: 'Order History'
        },
        {
            key: 'settings',
            label: 'Settings'
        }
    ];

    const onMenuClicked = (menuItems) => {
        navigate(menuItems.key);
    }

  return (
    <Menu items={menuItems} onClick={onMenuClicked}/>
  )
}

export default SideMenu
