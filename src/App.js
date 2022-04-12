import React from 'react'
import './App.css'
import { Navbar, Homepage, Cryptocurrencies, Cryptodetails, News } from './components'
import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<Cryptodetails />} />
              <Route path="news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App