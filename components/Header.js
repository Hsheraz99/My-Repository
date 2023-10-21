import React from 'react'
import '../App.css';


function Header  (props)  {
  return (
    <div className='flex'>
    <div onClick={()=>props.handleShow(false)}>Ecommerce Shopping App</div>
   <div onClick={()=>props.handleShow(true)}>Cart
    <sup>{props.count}</sup>
   </div>



    </div>
  )
}

export default Header;