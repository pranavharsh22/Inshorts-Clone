import React from 'react'
import { format, parseISO } from 'date-fns';

const ArticleBox = ({data}) => {
 
      
  return (
    <div className='article-box'>
        <div className="article-content flex">
            <div className="article-image">
                <img src={data.url} alt="" />
            </div>
            <div className="article-description">
                <h1>{data.title}</h1>
                <span ><b>short by </b>{data.author}/{new Date(data.timestamp).toDateString()}</span>
                <p >{data.description}</p>
                <button><a href={data.link}>Read More at {data.publisher}</a></button>
            </div>
        </div>
      
    </div>
  )
}

export default ArticleBox
