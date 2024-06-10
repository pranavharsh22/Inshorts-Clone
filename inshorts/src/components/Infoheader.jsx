import React from 'react'
import appstore from '../images/androidapp.png'
import googleplay from '../images/downloadsmartphone.png'
const Infoheader = () => {
  return (
    <div className='info-header'>
      <div className="info-content flex space-bw">
        <div className="inshorts-paragraph">
        <p>For the best experience use inshorts app on your smartphone</p>
        </div>
      
      <div className="googleplay">
        <img src={appstore} alt="" />
        <img src={googleplay} alt="" />
      </div>
    
      </div>
    </div>
  )
}

export default Infoheader
