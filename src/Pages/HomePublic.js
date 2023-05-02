import React from 'react'
import { HomePublicDiv } from '../StyleCompoents/Stylepublic';
import HomeCardRest from '../Compoents/HomeCardRest';
import fristJson from '../DataCompFlie/fistJson';
import { useNavigate} from 'react-router';

const HomePublic = () => {

  const navigate = useNavigate()

  const Resturant = (rest) => {
   
    navigate("/detialsRest",{ state:{rest}})
 

  }
  return (<>
    <HomePublicDiv>

      <div className='bgfontHome'>
        <div className='HomeSectionContent'>
          <h1>Momato</h1>
          <p>Discover the best food & drinks by Momato</p>
          <input class="searchbar_header" placeholder="Search for restaurant, cuisine or a dish"></input>
        </div>

      </div>

      <div className='Home_section_2'>
        {
          fristJson.map((el) => {
            return (<>
              <HomeCardRest props={el}
                Resturant={() => Resturant(el)}
              
              />
            </>)
          })
        }

      </div>
    </HomePublicDiv>



  </>

  )
}
export default HomePublic;
