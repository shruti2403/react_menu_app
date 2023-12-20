import React from 'react'
import './Hero.css'
import food from '../Assets/food_1.jpeg'
import arrow from '../Assets/arrow1.png' 

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        {/* <h2>Menu</h2> */}
        <div>
            <div className="hand-hand-icon">
                {/* <p>new </p> */}
                {/* <img src={} alt="" /> */}
            </div>
            <p>Foods</p>
            <p>of all kind</p>
      </div>
      <div className="hero-latest-btn">
        <div>Surf the menu</div>
        <img src={arrow} alt="" height='40px' width='50px'/></div>
</div>
      <div className="hero-right">
        <img src={food} alt="" height='400px' width='500px' />
      </div>
    </div>
  )
}

export default Hero
