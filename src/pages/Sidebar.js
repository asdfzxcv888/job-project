import React from 'react'
import { BiSolidDownArrowAlt } from "react-icons/bi";
import './sidebar.css'
import { RxExit } from "react-icons/rx";

const Sidebar = ({fun,val}) => {
  return (
    <div  className='sidebar'style={{width:'25%'}}>
      
      <div className='events'><h3 style={{display:'inline-block',width:'50%'}}>Events</h3> <button style={{display:'inline-block',width:'15%',marginTop:'0px',marginLeft:'30%'}} onClick={()=>fun(!val)}>
        <BiSolidDownArrowAlt ></BiSolidDownArrowAlt></button></div>

        <div className='side-button'>New Requests</div>
        
        <button className='out-button' onClick={()=>fun(!val)}>Estimate</button>

        <button className='out-button'onClick={()=>fun(!val)}>Events</button>
        <button className='out-button'onClick={()=>fun(!val)}>Partial Requests</button>

        <div className='sec-div'><h3 style={{display:'inline-block',}}>Positions</h3></div>
        <div className='sec-div'><h3 style={{display:'inline-block',}}>Contractors</h3></div>

        <div className='events'><h3 style={{display:'inline-block',width:'50%'}}>Users</h3> <button style={{display:'inline-block',width:'15%',marginTop:'0px',marginLeft:'30%'}} onClick={()=>fun(!val)}>
        <BiSolidDownArrowAlt ></BiSolidDownArrowAlt></button></div>
        <button className='out-button' onClick={()=>fun(!val)}>Admins</button>

        <button className='out-button' onClick={()=>fun(!val)}>Clients</button>
        <button className='out-button' onClick={()=>fun(!val)}>Coordinators </button>

        <div className='sec-div'><h3 style={{display:'inline-block',}}>Profile</h3></div>
        <button className='logout'><RxExit style={{  transform: "rotate(180deg)"}}></RxExit>  Log-Out</button>


    
    
    </div>
  )
}

export default Sidebar