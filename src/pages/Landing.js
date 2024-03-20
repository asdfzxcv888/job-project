import React ,{useState}from 'react'
import Sidebar from './Sidebar'
import './Landing.css'
import Meetingroom from './Meetingroom'
import Container from './Container'
import Seconddiv from './Seconddiv'
import Altdiv from './Altdiv'
import { BsInfoSquareFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io"
import { CiCamera } from "react-icons/ci";
const Landing = () => {
  const [hello,sethello]=useState(true)
  return (<>   
      <div className='semibody'>
      <div className='usr-profile'>
      < BsInfoSquareFill style={{marginLeft:'50%',display:'inline-block'}}/> 
      <IoMdNotificationsOutline style={{display:'inline-block',marginLeft:'2%'}}/>


      <div style={{display:'inline-block',marginLeft:'2%'}}>Hi,<p style={{display:'inline-block',color:'#39ff14'}}>Muhammad Azad</p>
      <p>Welcome back</p></div>
      <img src='https://t-power89.github.io/images/avatar.jpg'></img>
      </div>
      
    <div className='main-container' >


    <Sidebar fun={sethello} val={hello}></Sidebar>
    {hello && <Seconddiv></Seconddiv> }
    {!hello && <Altdiv></Altdiv> }
    



</div>


    </div>
    

  </>
    
  )
}

export default Landing