import React, { useEffect } from 'react'
import { AddModalDiv } from '../StyleCompoents/Stylepublic'
import { IoFastFood } from "react-icons/io5";
let newArr = []
const AddModal = ({ Close, data }) => {
   
   
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("value"))=== null) {
            newArr.length = 0;
            localStorage.removeItem("value")
        }else if(newArr.length!==JSON.parse(localStorage.getItem("value")).length){
            newArr.length = 0;
            newArr= [...JSON.parse(localStorage.getItem("value"))]
        }

    })
  

    function AddCart(data) {
        newArr.push(data)
        localStorage.setItem("value", JSON.stringify(newArr))
        Close()


    }



    return (
        <AddModalDiv>
            <div  className='Modal_container'>
                <p1 onClick={Close} className="cut_X">X</p1>
                <img className='addCartimg' src={data.img} alt='/'></img>
                <p1>You Giving your Hunger a new Option</p1>
                <h1><b>Your Order</b> - <IoFastFood /> </h1>
                <h1>{data.disName}</h1>
                <h1>Rs : {data.Rs}</h1>
                <button onClick={() => AddCart(data)} className='btnAddCart'>ADD TO OTHER</button>
            </div>
        </AddModalDiv>
    )
}
export default AddModal;