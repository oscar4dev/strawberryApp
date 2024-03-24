import React from 'react'
import './Contact.css'
import FeaturedImage from '../images/contact-img.jpg'
import Title from './Title.js'
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className='contact'>
      <div className='wrapper left'>
        <Title text='Contact' />
        <h1>Find Us</h1>
        <p>
          <span className='location'><FaLocationDot /></span>Idogbo, Upper-Sakponba 
          Road, Benin City, Benin, Nigeria.
        </p>
        <p className='time'><span className='clock'><FaClock /></span>Opening Hours</p>
        <div>
          <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>
        <a href='#'>Visit Us</a>
      </div>
      <div className='wrapper right'>
        <img src={FeaturedImage} className='featured-img' />
      </div>
    </section>
  )
}

export default Contact