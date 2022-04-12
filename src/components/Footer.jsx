import { Space, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <Typography.Title level={4} style={{color:"white",textAlign:"center"}}>
         Cryptoverse <br/>
         All Rights Reserved
        </Typography.Title>
        <Space>
            <Link to='/'>Home</Link>
            <Link to='/news'>News</Link>
        </Space>
    </div>
  )
}

export default Footer