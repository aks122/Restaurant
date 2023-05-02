import React from 'react'
import { HeaderPublicDiv } from '../StyleCompoents/Stylepublic';
import { NavLink } from "react-router-dom";
import imglog from "../Assets/pngwing.com.png"

const HeaderPublic = () => {
  return (
    <HeaderPublicDiv>
      <NavLink to=""></NavLink>
      <NavLink to="/signUp">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink  className="headelog"><img src={imglog} alt=''></img></NavLink>
    
    </HeaderPublicDiv>
  )
}
export default HeaderPublic;
