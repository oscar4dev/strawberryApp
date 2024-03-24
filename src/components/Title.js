import React from 'react'
import Spoon from './Spoon'
import './title.css'

const Title = ({ text }) => {
  return (
      <div className='title-component'>
         <p>{ text }</p>
         <Spoon />
      </div>
  )
}

export default Title