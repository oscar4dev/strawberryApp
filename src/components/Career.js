import React, { useState } from 'react'
import './Career.css'
import MainImage from '../images/career-photo-two.jpg'
import FeaturedImageOne from '../images/career-photo-one.jpg'
import FeaturedImageTwo from '../images/career-photo-three.jpg'
import testimonials from './DataThree.js'
import Title from './Title.js'

const Career = () => {
  return (
    <section className='career'>
      <div className='wrapper left first'>
        <Title text='Careers' />
        <p>
          "At Strawberry, we take great pride in creating 
          a supportive atmosphere that fosters career 
          advancement and personal development for our
          employees. Our dynamic team, comprised of 
          talented, enthusiastic, and youthful 
          individuals, is consistently motivated to go 
          above and beyond in delivering exceptional 
          service. We view our work as more than just a 
          job; it's a 'calling to serve' that unites us 
          as friends. We uphold a friendly workplace 
          culture that values and respects individual 
          differences, fostering an environment where we 
          support one another in the pursuit of our 
          personal aspirations."
        </p>
      </div>
      <div className='wrapper right'>
        <img src={MainImage} className='featured-img' />
      </div>
      <div className='wrapper right'>
        <img src={FeaturedImageOne} className='featured-img' />
      </div>
      <div className='wrapper left'>
        <Title text='Recruitment' />
        <p>
          If you think you will fit into our team and you 
          love to serve friends, then visit our current 
          openings or send your resume along with a cover 
          letter telling us about yourself and your 
          interests to <a href='#'>recruitment portal</a> to 
          get things started.
        </p>
      </div>
      <div className='wrapper left'>
        <Title text='Training & Development' />
        <p>
          "Embracing a culture of internal advancement and 
          an individualized approach to career 
          development, we empower and inspire our team 
          members to steer their own career paths and 
          evolve alongside the company. Furthermore, we 
          nurture our workforce for leadership roles, 
          leveraging their experiences gained from 
          cross-functional collaborations within our 
          organization.
        </p>
      </div>
      <div className='wrapper right'>
        <img src={FeaturedImageTwo} className='featured-img' />
      </div>
      <div className='testimonial'>
      <Title text='Testimonials' />
        { testimonials.map((item) => {
          return <div key={item.id}>
            <p className='user'>{item.user}</p>
            <p className='message'>{item.message}</p>
          </div>
        }) }
      </div>
    </section>
  )
}

export default Career