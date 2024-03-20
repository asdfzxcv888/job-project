import React from 'react'
import Container2 from './Container2'
import { IoEyeOutline } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Altdiv = () => {
  return (
    <div  style={{width:'60%',border:'0.3rem #ff6ac1 solid',margin:'auto' }}>

        <div >
          <h1 style={{width:'40%',fontWeight:'bolder',display:'inline-block'}}>Event Requests</h1> 
        <div  style={{width:'30%',backgroundColor:'transparent',border:'0.1rem white solid',color:'white',marginLeft:'20%',padding:'auto',
    borderRadius:'5px',height:'35px',display:'inline-block'}}><FaSearch style={{width:'18%'}}/>
    <input style={{width:'80%',backgroundColor:'transparent',border:'none',height:'30px'}}></input>
    
    </div><FaRegSquarePlus /></div>
      
            
            <div class="scrollable-div">
                            <div className='contain2' style={{backgroundColor:'#ff6ac1',fontSize:'larger'}}>
                        <p>  Event Name</p>
                        <p>Event Start</p>
                        <p>Event End</p>
                        <p>Client Name</p>
                        <p>Contact Info</p>
                        <p>Venue</p>
                        <p>city</p>
                        <p>state</p>
                        <p>zipcode</p>
                    
                    </div>
                <Container2></Container2>
                <Container2></Container2>

                <Container2></Container2>

                <Container2></Container2>

                <Container2></Container2>

                <Container2></Container2>

                <Container2></Container2>

                <Container2></Container2>

                <Container2></Container2>


           
            </div>
           


    </div>
  )
}

export default Altdiv