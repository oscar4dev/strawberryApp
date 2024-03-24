import React from 'react'
import './About.css'
import Spoon from './Spoon'
import { Link } from "react-router-dom";
import ForkKnife from '../images/fork-and-knife.jpg'
import Title from './Title'
import StrawberryLogo from '../images/strawberry-logo.jpg'
import Chef from '../images/chef.jpg'

const About = () => {
  return (
    <section className='about'>
      <div className='section-one'>
        <div className='wrapper left'>
          <Title text='About us' />
          <p>
            "Strawberry, a prominent brand under the Gigabyte 
            Global Ventured, operates within the Quick Service 
            Restaurant (QSR) sector. As a market leader and one 
            of the fastest-growing restaurant brands in the 
            nation, Strawberry currently has one store 
            in Benin City, Edo State and will expand. Strawberry 
            is dedicated to satisfying the diverse culinary 
            preferences of the local populace in Nigeria. Our 
            unique menu features a carefully curated 
            selection of contemporary and Nigerian dishes, some 
            of which are also enjoyed on dining tables in other 
            African countries."
          </p>
          <a href='#'>Know More</a>
        </div>
        <div className='wrapper mid'>
          <img src={StrawberryLogo} width={100} className='strawberry-logo' />
        </div>
        <div className='wrapper right'>
          <Title text='Our history' />
          <p>
            "Strawberry, a prominent brand under the Gigabyte 
            Global Ventured, operates within the Quick Service 
            Restaurant (QSR) sector. As a market leader and one 
            of the fastest-growing restaurant brands in the 
            nation, Strawberry currently has one store 
            in Benin City, Edo State and will expand. Strawberry 
            is dedicated to satisfying the diverse culinary 
            preferences of the local populace in Nigeria. Our 
            unique menu features a carefully curated 
            selection of contemporary and Nigerian dishes, some 
            of which are also enjoyed on dining tables in other 
            African countries."
          </p>
          <a href='#'>Know More</a>
        </div>
      </div>


      <div className='section-two'>
        <div className='bottom-wrapper left'>
          <img src={Chef} className='featured-img'/>
        </div> 
        <div className='bottom-wrapper right'>
          <Title text="Chef's Word" />
          <h1>What We Belive In</h1>
          <p className='text'>
            A cooking technique where food is vacuum-sealed in 
            a bag and slow-cooked in water at a precise, low 
            temperature, resulting in evenly cooked and 
            flavorful dishes.
          </p>
          <div>
            <h3>Dubem Christian</h3>
            <p>Chef & Founder</p>
          </div>
          <p className='sign'>DubemC</p>
        </div>
      </div>

    </section>
  )
}

export default About
  // <div className='about-container'>
  //   <div className='about-container-inner'>
  //     <div className='left'>
  //       <div>
  //         <h1 className='cursive'>About Us</h1>
  //         <Spoon />
  //       </div>
  //       <p>
  //         "Strawberry, a prominent brand under the Gigabyte 
  //         Global Ventured, operates within the Quick Service 
  //         Restaurant (QSR) sector. As a market leader and one 
  //         of the fastest-growing restaurant brands in the 
  //         nation, Strawberry currently has one store 
  //         in Benin City, Edo State and will expand. Strawberry 
  //         is dedicated to satisfying the diverse culinary 
  //         preferences of the local populace in Nigeria. Our 
  //         unique menu features a carefully curated 
  //         selection of contemporary and Nigerian dishes, some 
  //         of which are also enjoyed on dining tables in other 
  //         African countries."
  //       </p>
  //       <Link className='align-right'>Know More</Link>
  //     </div>
  //     <div className='mid'>
  //       <img src={ForkKnife} />
  //     </div>
  //     <div className='right'>
  //       <div>
  //         <h1 className='cursive'>Our History</h1>
  //         <Spoon />
  //       </div>
  //       <p>
  //         "Strawberry, a prominent brand under the Gigabyte 
  //         Global Ventured, operates within the Quick Service 
  //         Restaurant (QSR) sector. As a market leader and one 
  //         of the fastest-growing restaurant brands in the 
  //         nation, Strawberry currently has one store 
  //         in Benin City, Edo State and will expand. Strawberry 
  //         is dedicated to satisfying the diverse culinary 
  //         preferences of the local populace in Nigeria. Our 
  //         unique menu features a carefully curated 
  //         selection of contemporary and Nigerian dishes, some 
  //         of which are also enjoyed on dining tables in other 
  //         African countries."
  //       </p>
  //       <Link>Know More</Link>
  //     </div>
  //   </div>
  // </div>