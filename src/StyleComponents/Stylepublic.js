import styled from "styled-components";
import "./projec.css"
// import img from "../Assets/backimg.jpg"
export const HeaderPublicDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    padding-top:1rem;
    position: absolute;
    z-index: 100;
 

   .headelog img{
    width: 4rem;
    margin-top:-1rem;

   }
   a {
    text-decoration: none;
    font-size: x-large;
    margin-right: 7rem;
    color: white;
    color: rgb(255, 69, 0,81.3%);
}
`
export const PraviHeadDiv = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
 
.PraHeader_container {
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin: 1rem auto 1rem auto;

    }

.hr {
    border: 1px #9f9696 solid;
    width: 75%;
    margin: auto;
}
.monatHead {
    font-size: 3rem;
    text-align: start;
    font-family: "Mochiy Pop One",sans-serif;
    font-weight: 900;
    margin: 0;
    font-family: cursive;
}
.logoutBtn {
    margin: 1rem;
    font-weight: 800;
    font-family: inherit;
    cursor: pointer;
    :hover{
        color: red;
    }
}

input.search-bar {
    position: absolute;
    width: 2rem;
    top: 50px;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(255,68,0,.8235294117647058);
    height: 40px;
    border-radius: 40px;
    padding: 10px;
    transition: 0.7s;
    :hover{
    width: 30rem;
}
}


`

export const HomePublicDiv = styled.div`
   
 
.bgfontHome{
    width: 100%;
    height: 90vh;
    background:url(https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVuayUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80);
    background:url(https://media.istockphoto.com/id/1256818733/photo/close-up-asian-woman-takeaway-eating-junk-food-hamburger-and-pizza-close-up-shot-in-living.jpg?b=1&s=170667a&w=0&k=20&c=mJSO9d97NNXBWLx0AYpgbfCUVYD178MXkRLTtwtqoas=);
    background-size: cover;
    background-position: 100% ;

}

.HomeSectionContent {
    width: 50%;
    color: white;
    font-size: 2rem;
    text-align: center;
    margin: auto;
    padding-top: 6rem;

}
h1 {
    font-size: 90px;
    font-family: "Mochiy Pop One",sans-serif;
    margin: 100px 0 0 10px;
}


input.searchbar_header {
    width: 100%;
    height: 4rem;
    border-style: none;
    border-radius: 10px;
    border-radius: 1rem;
    margin-top: 3rem;
    text-decoration: grey;
    outline-color: hsla(0, 0% ,50.2%, .637);
    font-family: "M PLUS 1", sans - serif;
    padding: 0 0 5px 20px;
    margin: 30px 0 70px;
    font-size:xx-large;
}
/* ------------section home-------------- */
.Home_section_2 {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 3rem;
    margin: -6rem auto 1rem auto;

}
`
export const CardResturHome = styled.div`
    width: 18rem;
    height: 19rem;
    border-radius: 0.3rem;
    background: white;
    color:black;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 30px 0px;
    margin: 0.4rem;
    transition: 0.4s;
    padding: 0.3rem;
  
    img.imgCard {
    width: 100%;
    border-radius: 0.5rem;
    height: 12rem;
    margin-top:2px;
}
`
export const Detcard = styled.div`
    width: 19rem;
    border: 0.4rem #fa642d solid;
    padding: 1rem;
    font-weight: 400;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 30px 0px;
    border-radius: 0.5rem;;
    margin-bottom: 1rem;
    height: 12rem;
    transition:height 0.5s;
    &:hover{
        height: 26rem;
        transition:height 0.5s;
        &:hover .HoverOpen{
            transition-duration:02s;
           opacity: 1;
    
        }
    }
    .HoverOpen{
        margin-top: 0.5rem;
        line-height: 85%;
        transition-property:opacity;
        opacity: 0;
         
      
    }
  

    
   
  
   

    img {
    width: 100%;
    width: 100%;
    margin-top: -3rem;
}
.HoverOpen h3 {
    text-align: center;
    font-family: inherit;
}
.rating {
    text-align: center;
    width: 100%;
    margin: 3px 0px 3px 0px;
    font-size: small;
    background: green;
    color: white;
    font-weight: 700;
   
}
span{
    color: red;
}
button.btnOrder_now {
    background: red;
    border: none;
    border-radius: 5%;
    padding: 0.4rem;
    color: wheat;
    font-weight: 700;
    
}
`
/* item page */
export const Restitempage = styled.div`
    background: beige;
    padding: 11.5rem;

svg.logfood {
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-size: 3rem;
}
.deliveryshow {
    border: 2px red solid;
    width: 8rem;
    border-radius: 1rem;
    height: 4rem;
    padding: 0.6rem;
    color: red;
    font-weight: 900;
    font-size: 1.5rem;
    margin: 1rem 0rem 1rem 0rem;
    box-shadow: 2px 2px #ff4500;
}
.itmedetals{
    width: 80%;
    padding: 1rem;
   

}
  
    .mapCard {
        margin-top: 8rem;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 2rem;
    }

`
// ------item Restuarant------------------?//
export const CarditemAddDiv = styled.div`
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 20px 0px;
    border-radius: 0.5rem;;
    margin-bottom: 2rem;
    margin-top: 2rem;
    padding: 1rem;
    &:hover{
        box-shadow: 3px 3px 3px 3px rgb(0, 0, 0);
    }

    
    .imgAnd_rate {
    width: 8%;
    display: flex;
   }
   .nameDet_rate h3 {
    font-weight: 200;
    width: 30rem;
}
   .imgAnd_rate img{
    width: 100%;
    margin-right: 2rem;
    border-radius: 0.5rem;
   
   }
   .raking_star {
    font-size: 23px;
    width: 11rem;
    border-radius: 6%;
    color: black;
    margin: 0.5rem 0rem;
    

}
.btnAddDiv {
    text-align: center;
    margin: 2rem 2rem 2rem 0rem;
    border: none;
}
button.btnAdd {
    font-weight: 700;
    color: red;
    border-radius: 10%;
    border: 1px red solid;
}

`

export const RestItemStyle = styled.div`
padding: 11rem;
h1.momatoHeading {
    font-weight: 900;
    font-family: inherit;
    font-size: 4rem;
    margin-bottom: 3rem;
}
img{
    width: 98%;
    transition: 0.4s;
    padding: 2px;
    text-align: center;
    :hover{
       width: 100%; ;
    }
 
}
.left_img {
    width: 50%;
}
.right_img {
    display: flex;
    width: 50%;
    padding: 5px;
  
}
.top_img {
    display: flex;
    width: 100%;
    margin: auto;
    padding: 5px;
   
}
h1.orderOn {
    color: rgba(255,0,0,.658);
    font-weight: 400;
  
}
.Restname p {
    margin: 0;
    font-size: 17px;
    font-weight: 100;
    color: grey;
}

element.style {
}
span.ranking {
    float: right;
    font-size: 1rem;
    width: 10rem;
    background: green;
    text-align: center;
    color: white;
    margin-right: 1rem;
}
`

// ????---------Add Modal_----------cart------------...///

export const AddModalDiv = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    position: absolute;
    background-color: rgb(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
   

.Modal_container{
    width: 50%;
    background: beige;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 20px 0px;
    border-radius: 0.5rem;
    margin: auto;
    padding: 1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

}


.cut_X {
    float: right;
    font-size: 2rem;
    color: red;
    margin-top: -1rem;
    cursor: pointer;
}
img.addCartimg {
    width: 36%;
    height: 10rem;
    display: block;
    margin: auto;
    border-radius: 5%;
}


button.btnAddCart {
    padding: 0.3rem;
    width: 14em;
    margin: 0.3rem;
    background: red;
    font-weight: 900;
    color: ghostwhite;
    font-family: math;
    border: none;
    border-radius: 1rem;
}

`

// /-------------------login--------------------------page

export const LoginDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: beige;
.log_container {
     width: 21rem;
    background: rgb(255, 69, 0,81.3%);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 20px 0px;
}
.logContact {
    font-size: 8rem;
    margin-top: -5rem;
    border-radius: 100%;
    background: rgb(255, 69, 0,71.3%);
}
input.inputtag {
    width: 15rem;
    padding-left: 0.5rem;
    margin: 0.3rem;
    border: none;
    height: 2.4rem;
    background-color: beige;
}
svg.inpulog {
    margin-right: -5px;
    margin-top: -4px;
    color: wheat;
    position: relative;
    font-size: 2.5rem;
    background: #282727;
    padding: 2px;
}

.radio_forget {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}
.prara {
    margin: 7px;
    font-weight: 400;
    font-family: none;
    margin-left: -22px;
    cursor: pointer;
    :hover{
        color: blue;
    }
}

button.logbtn {
    width: 10rem;
    height: 2rem;
    border: none;
    border-radius: 10rem;
    font-weight: 500;
    box-shadow: rgba(0, 0, 0, 0.8) -1px 0 22px 0;
    :hover{
        box-shadow: rgba(0, 0, 0, 0.8) 1px 0 22px 0;
        background-color:rgb(40 ,29, 25);
        color: white;

    }
}
`