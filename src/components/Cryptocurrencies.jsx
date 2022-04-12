import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card,Row,Col,Input} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
const Cryptocurrencies = ({simplified}) => {
  const [searchTerm,setSearchTerm] = useState('')
  const count = simplified ? 10 :100;
  const {data:cryptosList,isFetching} = useGetCryptosQuery(count)
  const [cryptos,setCryptos]=useState([])

  useEffect(()=>{ 
    const filteredData = cryptosList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData);
    console.log(filteredData,"hbjkhbkj")
   },[cryptosList,searchTerm])



  if(isFetching) return 'Loading...'


  return (
    <> 
    {!simplified && (
    <div className='search-crypto'>
      <Input placeholder='search cryptocurrency'onChange={(e)=>setSearchTerm(e.target.value)}/>
    </div>
    )}
    <Row gutter={[32,32]} className='crypto-card-container'>
    {cryptos?.map((item)=>(
      <Col xs={24} sm={12} lg={6} className='crypto-card'key={item.uuid}>
        <Link to={`/crypto/${item.uuid}`}>
          <Card 
          title={`${item.rank}. ${item.name}`}
          extra={<img className='crypto-image' src={item.iconUrl}/>}
          hoverable
          >
            <p>Price : {millify(item.price)}</p>
            <p>Market Cap : {millify(item.marketCap)}</p>
            <p>daily Change : {millify(item.change)}%</p>
          </Card>
        </Link>
      </Col> 
    ))}
    </Row>  
    </>
  ) 
}

export default Cryptocurrencies