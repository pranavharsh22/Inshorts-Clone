import React, { useEffect,useState } from 'react'
import { getNews } from '../services/api'
import ArticleBox from './ArticleBox'

const Articles = () => {
  const [news,setNews]=useState([])
  useEffect(()=>{
    dailyNews()
  },[])

  const dailyNews=async()=>{
    let response=await getNews()
    console.log(response.data)
    setNews(response.data)
  }
  return (
    <div>
      {news.map(data=>(
        <ArticleBox data={data}/>
      ))}
    </div>
  )
}

export default Articles
