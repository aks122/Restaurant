import React from 'react'
import { LoginDiv } from '../StyleComponents/Stylepublic';
import { IoMdContact } from "react-icons/io";
import { BiLockOpen } from "react-icons/bi";
import { useNavigate } from 'react-router';

const LoginPage = ({PravitPage}) => {

  
  const Navigation = useNavigate()
  const [val, setValue] = React.useState({
    email: "",
    password: ""
  })
  
  let g ="ervikastomar0@gmail.com"
  let p = "12345678"
  const SubmitForm = () => {
    // alert(val.email, " & ", val.password, " Done")
    // console.log(val.email, " & ", val.password, " Done")
    if(g === val.email && p=== val.password){
      let valuRoute= Math.random()
      localStorage.setItem("token",valuRoute)
      PravitPage();
      Navigation("/")
     
    

    }else{
      alert("Enter valid gamil password ")
    }

  }



  const ChangeHandle = (e) => {
    const {name,value} = e.target;
    setValue((preValue)=>{
        return{
          ...preValue,
          [name]:value
        }

    })
  }








  return (<>
    <LoginDiv>
      <div className='log_container'>
        <IoMdContact className='logContact' />
        <br></br>
        <IoMdContact className='inpulog' />
        <input className='inputtag' type='email' name='email' value={val.email} placeholder='Email ID' onChange={ChangeHandle} required></input>
        <br></br>
        <BiLockOpen className='inpulog' />
        <input className="inputtag" type='password' name='password' value={val.password} placeholder='Password' onChange={ChangeHandle} required></input>
        <div className='radio_forget'>
          <input type='checkbox' className='checkbox' /><p className='prara'>Remainder me</p>
          <p className='prara'>Forget Password</p>
        </div>
        <button className='logbtn' onClick={SubmitForm}>Login</button>
      </div>
    </LoginDiv>

  </>)
}
export default LoginPage;
