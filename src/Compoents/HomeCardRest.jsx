import React from 'react'
import { CardResturHome } from '../StyleCompoents/Stylepublic';

const HomeCardRest = (props) => {


  return (
    <CardResturHome>
        <img onClick={props.Resturant} className='imgCard' src={props.props.photo} alt=''></img>
        <h3>{props.props.name}</h3>
        <h5>{props.props.heading}</h5>

    </CardResturHome>
  )
}

export default HomeCardRest;
