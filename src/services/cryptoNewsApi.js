import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '58f09cd4bcmsh03850fb623b10ccp167ee7jsn5fec6f5e5ee2'
  }
 const baseUrl='https://bing-news-search1.p.rapidapi.com';

 const createRequest =(url)=>({
    url,
    headers:cryptoNewsHeaders 
  })

  export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
}) 

export const {useGetCryptoNewsQuery} = cryptoNewsApi;