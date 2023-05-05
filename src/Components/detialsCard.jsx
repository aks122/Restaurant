import React from 'react'
import { Detcard } from '../StyleComponents/Stylepublic'


const DetialsCard = (props) => {
    return (<>
        <Detcard>
         
            <img src={props.props.img} alt='/'></img>
            <div className='HoverOpen'>
                <div className='rating'>{props.props.rating}*</div>
                <p><span>{props.props.time}</span>{props.props.timezone}</p>
                <h3>{props.props.h3}</h3>
                <p>{props.props.itemHeading}</p>
                <p>{props.props.p1}</p>
                <p>{props.props.p2}</p>
                <p>{props.props.p3}</p>
                <button onClick={props.ResturantItem} className='btnOrder_now'>{props.props.btn}</button>
         
            </div>
        </Detcard>

    </>

    )
}

export default DetialsCard