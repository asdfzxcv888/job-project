import React from 'react'
import Meetingroom from './Meetingroom'
import Container from './Container'

const Seconddiv = () => {
  return (
    <div style={{width:'60%',border:'0.3rem #ff6ac1 solid',margin:'auto',padding:'5px',borderRadius:'10px' }}>
    <div  style={{color:'white'}}><h2 style={{color:'white', display:'inline-block'}}>Event Name</h2>(Venue Details)</div>


    <div  className='btn-holder'>
        <p>Event Details</p>
        <p>Assign Cooordinator/Coordinator</p>
        <p>Session Management</p>
        <p>Generate SOW</p>



    </div>

    <div className='flex2'>
      <div className='flex21'> <h3 style={{color:'white'}}>Assign Coordinator</h3>
            <select id="cars" name="cars">
              <option value="volvo">Volvo XC90</option>
              <option value="saab">Saab 95</option>
              <option value="mercedes">Mercedes SLK</option>
              <option value="audi">Audi TT</option>
            </select>
            <h3 style={{color:''}}>Add New Coordinator</h3>
      </div>

      
      <div className='flex22'>  <h3 style={{display:'inline-block'}}>Event Name</h3><p style={{display:'inline-block'}}>(Venue Here)</p>
      <div> <p>Start 12-02-2023</p> <p>Ends 15-12-2023</p></div>
      <div> <p>Venue Address:Some Location 12,City,State</p></div>

      </div>
   
      </div>




      <div className='flex3'>

        <div className='flex31'> 
        <h3 style={{marginLeft:'5%'}}>Assign Coordinator</h3>
        <Meetingroom number={'1'} positions={'12'}></Meetingroom>
        <Meetingroom number={'2'} positions={'12'}></Meetingroom>

        <Meetingroom number={'3'} positions={'12'}></Meetingroom>

        <Meetingroom number={'4'} positions={'12'}></Meetingroom>

        <Meetingroom number={'5'} positions={'12'}></Meetingroom>

     


        
        </div>
        
        <div className='flex32'> 
        <h3>Positions</h3>

        <div className='a32container'>
    <p>Position</p>
    <p>Time</p>
    <p>Info</p>
    <p>Quantity</p>
    
</div>
        <Container op1={'Camera1(Video)'} op2={'9am-7pm'} op3={'LP default'} op4={'20'}></Container>
        <Container op1={'Camera1(Video)'} op2={'9am-7pm'} op3={'LP default'} op4={'20'}></Container>
        <Container op1={'Camera1(Video)'} op2={'9am-7pm'} op3={'LP default'} op4={'20'}></Container>
        <Container op1={'Camera1(Video)'} op2={'9am-7pm'} op3={'LP default'} op4={'20'}></Container>
        <Container op1={'Camera1(Video)'} op2={'9am-7pm'} op3={'LP default'} op4={'20'}></Container>
        <Container op1={'Camera1(Video)'} op2={'9am-7pm'} op3={'LP default'} op4={'20'}></Container>
        <Container op1={'Camera1(Video)'} op2={'9am-7pm'} op3={'LP default'} op4={'20'}></Container>

     
        
        </div>
      </div>


      


    



</div>
  )
}

export default Seconddiv