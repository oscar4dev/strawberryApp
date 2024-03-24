import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import MainImage from '../images/main-image.jpg'
import Title from './Title';

const Home = () => {
  return (
    <section className='home'>
      <div className='wrapper left'>
        <Title text='Chase The new flavour' />
        <h1>The Key To Fine Dining</h1>
        <p>
          Welcome to Strawberry, where exquisite flavors 
          and culinary artistry come together to create an 
          unforgettable dining experience for your senses.
        </p>
        <Link to='menu'>Explore Menu</Link>
      </div>
      <div className='wrapper right'>
        <img src={MainImage} className='main-img' />
      </div>
    </section>
  )
}

export default Home