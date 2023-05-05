import React from 'react'
import { useNavigate } from 'react-router'


const Order = ({Order}) => {
    let token = localStorage.getItem("token")
    let value = JSON.parse(localStorage.getItem("value"))
    const Navi = useNavigate();
    const OrderDone = () => {
        if(token===null){
            Order()
            Navi("/login")
        }
        else if(value.length===0){
            alert("Plase Add Some items")
        }
        else{
            alert("Order Successfull ")
            Order()
        }
        
    
        
    }

    return (
        <button onClick={OrderDone} className="Oder">Oder Now</button>
    )
}

export default Order