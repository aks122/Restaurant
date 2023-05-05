import React from 'react'
import { RestItemStyle } from '../StyleComponents/Stylepublic'
import ItemCardAdd from '../Components/itemCardAdd'
import { useLocation } from 'react-router';
import items from '../DataCompFlie/RestTotaltemData';
import AddModal from '../Components/addModal';
import { useState } from 'react';




const Additem = () => {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState(0)

    let resallItme = 0;
    const location = useLocation();
    const Restaru = location.state.el;

    const restItmeshow = items.filter((el) => {
        if (Restaru.Rid === el.itemsID) {
            resallItme = el.menu
            return el.menu

        }
    }
    
    )
    // console.log(restItmeshow)
    
    async function Modalitem(el) {
        await setData(el)
        setModal(true)
    }
    function Close() {
        setModal(false)
    }
    
  
    return (<div>
        {modal && <AddModal data = {data}  Close={Close} />}
       
         
                <RestItemStyle>

                    <h1 className='momatoHeading'>Momato</h1>
                    <div className='top_img'>
                        <div className='left_img'>
                            <img src={Restaru.img} alt=''></img>
                        </div>
                        <div className='right_img'>
                            <div>
                                <img className='sidimg' src={Restaru.img} alt=''></img>
                                <img  className='sidimg'src={Restaru.img2} alt=''></img>
                            </div>
                            <div>
                                <img className='sidimg' src={Restaru.img3} alt=''></img>
                                <img className='sidimg' src={Restaru.img} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='Restname'>
                        <h1>{Restaru.h3}<span className='ranking'> 4.0</span></h1>
                        <p>{Restaru.p1}{Restaru.p2}{Restaru.p3}</p>
                        <p><span>{Restaru.time}</span>{Restaru.timezone} </p>
                        <h1 className='orderOn'>Order Online</h1>
                        <hr></hr>
                        <p>Recommended</p>
                        {
                            resallItme.map((el) => {
                              
                                return (<>
                                    <ItemCardAdd props={el}
                                        
                                        Modal={() => { Modalitem(el) }}
                                    />
                                    

                                </>)
                            })
                        }
                    </div>

                </RestItemStyle>
          

    </div>)
}
export default Additem