import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderPublic from "../Compoents/HeaderPublic";
import PrivateHeader from "../Compoents/PrivateHeader";
import HomePublic from "../Pages/HomePublic";
import LoginPage from "../Auth/login";
import SignUpPage from "../Auth/signUp";
import Footer from "../Compoents/wefooter";
import DetialsRest from "../Pages/detialsRest";
import { Cart } from "../Pages/Cart";
import { BsCart4 } from "react-icons/bs";
import Additem from "../Pages/additem";
import { FaRupeeSign } from "react-icons/fa";
import Order from "../Compoents/button";






let total = 0;
const Routing = () => {
  const [open, setOpen] = useState(false);
  const [localValue, setLocalvalue] = useState([]);
  const [items, setItems] = useState(0);
  const [maps, setMaps] = useState(false);
  const [pravit, setPravit] = useState(false);





  useEffect(() => {
    if (localValue !== null) {
      setMaps(true)
    }
  })


  async function OpenCart() {
    await setLocalvalue(JSON.parse(localStorage.getItem("value")))
    await setOpen(true)

    useEffect(() => {
      if (localValue === null) {
        setItems(0)
      } else {
        setItems(localValue.length)

      }

    })

  }

  useEffect(() => {
    setItems(localValue.length)
  })

  const Close = () => {
    setOpen(false);
  }

  async function Removeitem(el) {
    let index = localValue.indexOf(el)
    await localValue.splice(index, 1)
    await localStorage.removeItem("value");
    await localStorage.setItem("value", JSON.stringify(localValue))
    await setLocalvalue(localValue)
    await Close();
    await OpenCart();
    if (localValue.length === 0) {
      localValue.length = 0;
      localStorage.removeItem("value");
      Close()
    }



  }
  let token = localStorage.getItem("token")
  useEffect(() => {
    if (token !== null) {
      setPravit(true)
    }

  })



  function PravitPage() {
    let token = localStorage.getItem("token")
    if (token !== null) {
      setPravit(true)
    }
  }

  function Orderdone() {
    Close()

  }
  // let modalref = React.useRef(null)
  // let modalrefcontaine = React.useRef(null)
  // let rembutn = React.useRef(null)

  // React.useEffect(() => {
  //   const ModalDou = (e) => {
  //     if(rembutn.current?.contains(e.target)){
  //       // alert("dd")
  //       // console.log(rembutn.current,"00000000000000000000000000000")
  //       // alert("ddd")
  //       // setOpen(true) 
  //     }
  //     else if (modalref.current?.contains(e.target)) {
  //        setOpen(true) 
  //     }
  //     else if(!modalrefcontaine.current?.contains(e.target)){
  //       console.log(rembutn.current,"00000000000000000000000000000")

  //       //  alert("outmoaal")

  //        Close()
  //     }
   
  //   }
//      document.body.addEventListener("click", ModalDou)
//     return ()=>document.body.removeEventListener("click",ModalDou)
// })



  total = 0
  return (
    <>

      <BrowserRouter >
        {open && <div className='cart_Container'>
          <h1 onClick={Close} className='cut-x'>X</h1>

          {maps &&
            localValue.map((el,i) => {
              total = total + el.Rs
              return (<>
              
                <Cart  Removeitem={() => { Removeitem(el) }} props={el}
                
                                                                          
                 />
                 
              </>)
            })
          }
          <div className="total_imtem_order">
            <h1 className="total">Total : < FaRupeeSign className="logRs" />{total}</h1>
            <h1 className="tota">Items : {items}</h1>
            <br></br>
            {/* <button onClick={OrderDone} className="Oder">Oder Now</button> */}
            <Order Order={Orderdone}></Order>
          </div>
        </div>}


        {pravit ? <PrivateHeader /> : <HeaderPublic />}

        <div onClick={OpenCart} ><BsCart4 className="cart_log"></BsCart4></div>

        <Routes>
          <Route path="" element={<HomePublic />}></Route>
          <Route path="/singUp" element={<SignUpPage />}></Route>
          <Route path="/login" element={<LoginPage PravitPage={PravitPage} />}></Route>
          <Route path="/detialsRest" element={<DetialsRest />}></Route>
          <Route path="/additem" element={<Additem />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}
export default Routing;
