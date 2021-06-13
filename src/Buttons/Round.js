import React from 'react'
import './Round.css'

const Round = (props) => {
  return (
    <div className='round'>
      <div className='icon' style={{ backgroundImage: `url(${props.icon})` }} />
      <div>{props.holder}</div>
    </div>
  )
}

export default Round
