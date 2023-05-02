import React from 'react'
import { CarditemAddDiv } from '../StyleCompoents/Stylepublic';
import { FaRupeeSign } from "react-icons/fa";

const ItemCardAdd = ({props,Modal}) => {
   
    

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
                <button onClick={()=>{Modal()}} className='btnAdd'>{props.Addbtn}</button>
                <p>{props.cut}</p>
            </div>
        </CarditemAddDiv>
    </>)
}

export default ItemCardAdd;