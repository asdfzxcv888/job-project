import React from 'react'
import { PiStarFourDuotone } from "react-icons/pi";

const Meetingroom = ({number,positions}) => {
  return (
    <div className='inner-div'>
        
        <h3>Meeting Room{number}</h3><PiStarFourDuotone/><p className='mainp'>{positions} positions</p>

        <span>Start from 12 Jan,2023-Ends at 15 Jan,2023</span>
    </div>
  )
}

export default Meetingroom