import React from 'react'
import { CarditemAddDiv } from '../StyleComponents/Stylepublic';
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {add} from '../Reducers'




const ItemCardAdd = ({props,Modal})  => {

   


    // console.log(props)
    const dispatch = useDispatch();
    // dispatch(add(product));
//    const Modal = (products) =>{
//     dispatch(add(products))
//     }

const DispatchNow = (props)=>{
    dispatch(add(props))

}

    return (<>
        <CarditemAddDiv>
            <div className='imgAnd_rate'>   
                <img src={props.img}></img>
                <div className='nameDet_rate'>
                    <h3>{props.disName}</h3>
                    <div className='raking_star'>*<span>{props.rating}</span></div>
                    <h5><FaRupeeSign/>{props.Rs}</h5>
                </div>
            </div>
            <div className='btnAddDiv'>
                <button onClick={()=>{Modal();DispatchNow(props)} }className='btnAdd'>{props.Addbtn   }</button>
                <p>{props.cut}</p>            </div>
        </CarditemAddDiv>
    </>)
}

export default ItemCardAdd;