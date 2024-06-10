import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import logo from '../images/logo.png'


const Header = () => {
  
  return (
    <div className='header-section'>
        <div className="header-content flex align-center">
            <p><VscThreeBars/></p>
            
            
            <span><img src={logo} alt="" /></span>


        </div>
      
    </div>
  )
}

export default Header
