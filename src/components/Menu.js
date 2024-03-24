import React, { useState } from 'react'
import './Menu.css'
import Title from './Title.js'
import dataOne from './DataOne.js'
import dataTwo from './DataTwo.js'
import Cocktail from '../images/cocktail.jpg'
import photoGrid from './DataFour.js'

const Menu = () => {

  const [dishes, setDishes] = useState(dataOne)
  const [drinks, setDrinks] = useState(dataTwo)
  const [photos, setPhotos] = useState(photoGrid)
  const [viewMore, setViewMore] = useState(false)

  function handleViewMore () {
    setViewMore((prevView) => {
      return !prevView
    })
  }

  return (
    <section className='menu'>
      <Title text='Menu that fits your palatte' />
      <h1 className='special'>Today's Special</h1>   
      <div className='section-one'>
          <div className='wrapper left'>
            <Title text='dishes' />
            { dataOne.map((dish) => {
              return <div key={dish.id} className='inner'>
                <div>
                  <p>{dish.title}</p>
                  <p>{dish.tags}</p>
                </div>
                <div>
                  <p>----- {dish.price}</p>
                </div>
              </div>
            }) }
          </div>
          <div className='wrapper mid'>
            <img src={Cocktail} className='cocktail' />
          </div>
          <div className='wrapper right'>
            <Title text='Drinks' />
            { dataTwo.map((drink) => {
              return <div key={drink.id} className='inner'>
                <div>
                  <p>{drink.title}</p>
                  <p>{drink.tags}</p>
                </div>
                <div>
                  <p>----- {drink.price}</p>
                </div>
              </div>
            }) }
          </div>
      </div>

      <button 
        className='view-more-btn' 
        onClick={handleViewMore}>View {viewMore ? 'Less' : 'More'}
      </button>

      <div>
        { viewMore && (
        <>
          <div className='photo-tile-container'>
            { photoGrid.map((photo) => {
              return <div key={photo.id} className='photo-tile'>
                <div className='top'>
                  <img src={photo.img} className='grid-img' />
                </div>
                <div className='bottom'>
                  <p className='type'>{photo.type}</p>
                  <p>{photo.desc}</p>
                </div>
              </div>
            }) }
          </div>
          <button 
            onClick={() => setViewMore(false)} 
            className='view-less-btn'>View Less
          </button>
        </>
        ) }
      </div>
    </section>
  )
}

export default Menu