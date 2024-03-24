import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <footer className='footer'>
    <div className='footer-wrapper'>
      <p className='rights'>2024 Strawberry. All Rights Reserved.</p>
      <div className='inner'>
        <Link to='#'><FaXTwitter /></Link>
        <Link to='#'><FaFacebookF /></Link>
        <Link to='#'><FaInstagram /></Link>
      </div>
      <a target='_blank' href=''>Powered by Oscar4dev</a>
    </div>
  </footer>
  )
}

export default Footer