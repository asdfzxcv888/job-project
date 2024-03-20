import React from 'react'

const Container = ({op1,op2,op3,op4}) => {
  return (
    <div className='a32container'>
        <p>{op1}</p>
        <p>{op2}</p>
        <p>{op3}</p>
        <p>{op4}</p>
        <select>
            <option>Select contractor</option>
        </select>
    
    </div>
  )
}

export default Container