import React from 'react'
import icon from '../images/logo.png'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons'
import { useState } from 'react'
import { useEffect } from 'react'
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [screenSize, setScreenSize] = useState(undefined);
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
            window.addEventListener('resize', handleResize)
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} />
                <Typography.Title level={2} className='logo'>
                    <Link to="/"> CryptoVerse</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
            </div>
            {activeMenu && (
                <Menu theme='dark' key={"menu"}>
                    <Menu.Item icon={<HomeOutlined />} key={"Home"}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />} key={"Cryptocurrencies"}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />} key={"News"}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    )
}

export default Navbar