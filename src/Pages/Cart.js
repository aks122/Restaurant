import React from 'react'
import { FaRupeeSign } from "react-icons/fa";


export const Cart = ({props,Removeitem}) => {



  return (<>
   
     
      <div className='innet_cart_container'>
        <img className='imgCart' src={props.img} alt=''></img>
        <div className='detials'>
          <h5>{props.disName}</h5>
          <p>Quantity : <span>1</span></p>
          <p><FaRupeeSign/> {props.Rs}</p>
        </div>
        <button  onClick={(Removeitem)} className='btnRomover'>Remove</button>
        
    </div>
  
 </> )
}
