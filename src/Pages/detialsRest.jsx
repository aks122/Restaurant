import React from 'react'
import { useLocation } from 'react-router';
import DetialsCard from '../Compoents/detialsCard';
import { Restitempage } from '../StyleCompoents/Stylepublic';
import RestNameData from '../DataCompFlie/secodjdon';
import { IoFastFood } from "react-icons/io5";
import { useNavigate } from 'react-router';
const DetialsRest = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const ResturantItem = (el) => {
    
        navigate("/additem",{ state:{el}})
    
      }

    return (<>
        <Restitempage>
            <div className='itmedetals'></div>
            <div className='deliveryshow'>Delivery</div>
            <h1><b>{location.state.rest.name}</b><IoFastFood  className ="logfood" /></h1>
            <h2>Delivery Restaurnts in Delhi NCR</h2>
            <div className='mapCard'>
                {
                    RestNameData.map((el) => {
                        
                        return (<>
                             <DetialsCard props= {el}
                             ResturantItem={() => ResturantItem(el)}/>
                        </>)
                    })
                } 
            </div>
        </Restitempage>

    </>)
}



export default DetialsRest;