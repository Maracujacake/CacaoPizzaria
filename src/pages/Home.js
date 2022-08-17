import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={ {backgroundImage: `url( ${bannerImage} )`} }>
      <div className='header__container' >
        <h1>Cacau's Pizzaria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
        <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home