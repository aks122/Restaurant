import React from 'react'
import { PraviHeadDiv } from '../StyleCompoents/Stylepublic';
import { useNavigate } from 'react-router';
const PrivateHeader = () => {
    const Navigate = useNavigate()

    const LogoutSite =()=>{
        localStorage.clear();
        Navigate("/login")
        window.location.reload();
                
    }


    return (
        <PraviHeadDiv>
            <div className='PraHeader_container'>
                <h1 className='monatHead'>Momato</h1>
                {/* <input class="search-bar" placeholder="Search for restaurant, cuisine or a dish"></input> */}
                <h5 onClick={LogoutSite} className='logoutBtn'>LogOut</h5>
            </div>
            <br></br>
            <div className='hr'></div>

        </PraviHeadDiv>
    )
}

export default PrivateHeader;
