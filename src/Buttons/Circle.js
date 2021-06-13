import React from 'react'
import './Circle.css'

const Circle = (props) => {
  return (
    <div className='circle'>
      <div className='icon' style={{ backgroundImage: `url(${props.icon})` }} />
      <div className='holder'>{props.holder}</div>
    </div>
  )
}

export default Circle
