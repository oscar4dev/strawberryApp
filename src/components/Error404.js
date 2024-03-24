import React from 'react'
import { Link } from "react-router-dom";
import './error.css'

const Error404 = () => {
  return (
   <section className='error'>
      <div className='wrapper'>
         <p>Sorry, the page you were looking for is currently not available.</p>
         <Link to='/'>Return To Home</Link>
      </div>
   </section>
  )
}

export default Error404