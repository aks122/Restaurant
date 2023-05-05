import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch} from 'react-redux';
import { remove } from '../Reducers';

import { useNavigate, useLocation } from 'react-router';



export const Cart = ({props}) => {
  let navigate = useNavigate()
  const dispatch = useDispatch();
  
const Updateitem = (remove)=>{
   dispatch(remove(remove))
}

  // const Removeitem = (img) => {
  //   console.log(img)
  //   let temp = [...items]
  //   let data = temp.findIndex((e) =>
  //     e.img === img,
  //     { state: { id: img } },
  //     navigate("/additem", { state: { id: img } })
  //   )

  // }
  const location = useLocation();
  console.log(location);
    let  data = location.state.id







  return (<>
   
     
      <div className='innet_cart_container'>
        <img className='imgCart' src={props.img} alt=''></img>
        <div className='detials'>
          <h5>{props.disName}</h5>
          <p>Quantity : <span>1</span></p>
          <p><FaRupeeSign/> {props.Rs}</p>
        </div>
        <button  onClick={(()=>Updateitem(remove))} className='btnRomover'>Remove</button>
        
    </div>
  
 </> )
}
