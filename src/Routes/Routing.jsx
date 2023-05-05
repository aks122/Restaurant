import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderPublic from "../Components/HeaderPublic";
import PrivateHeader from "../Components/PrivateHeader";
import HomePublic from "../Pages/HomePublic";
import LoginPage from "../Auth/login";
import SignUpPage from "../Auth/signUp";
import Footer from "../Components/wefooter";
import DetialsRest from "../Pages/detialsRest";
import { Cart } from "../Pages/Cart";
import { BsCart4 } from "react-icons/bs";
import Additem from "../Pages/additem";
import { FaRupeeSign } from "react-icons/fa";
import Order from "../Components/button";
import { Provider } from "react-redux";
import Store from "../Combine";


import { useSelector } from "react-redux";


let total = 0;
const Routing = () => {
  const selectorItems = useSelector((state)=> state.persistReducers.value)
  

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

  async function Updateitem(el) {
    let index = localValue.indexOf(el)
    // await localValue.splice(index, 1)
    // await localStorage.removeItem("value");
    // await localStorage.setItem("value", JSON.stringify(localValue))
    // await setLocalvalue(localValue)
    // await Close();
    await OpenCart();
    // if (localValue.length === 0) {
    //   localValue.length = 0;
    //   localStorage.Updateitem("value");
    //   Close()
    // }



  }
  // let token = localStorage.getItem("token")
  // useEffect(() => {
  //   if (token !== null) {
  //     setPravit(true)
  //   }

  // })



  function PravitPage() {
    let token = localStorage.getItem("token")
    if (token !== null) {
      setPravit(true)
    }
  }

  function Orderdone() {
    Close()

  }
  



  total = 0
  return (
    <>
     <Provider store={Store}>
      <BrowserRouter >
        {open && <div className='cart_Container'>
          <h1 onClick={Close} className='cut-x'>X</h1>

          {maps &&
            selectorItems.map((el,i) => {
              total = total + el.Rs
              return (<>
              
                <Cart  Updateitem={() => { Updateitem(el) }} props={el}
                Index={i}
                                                                          
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
      </Provider>


    </>
  )
}
export default Routing;
