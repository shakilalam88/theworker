import React from 'react';
import ButtonGreen from './ButtonGreen';
import '../Main.css'

const HeroImage = () => {
  return (
    <div className='heroSection'>
      <div className="hero">
        <div className="heroText">
          <h2>welcome to the worker</h2>
          <h1>hassle free service & product</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta, <br/>explicabo repellat unde in est accusamus facere asperiores ipsum perspiciatis?</p>
          <ButtonGreen text='Our Service'/>
        </div>
      </div>
    </div>
  )
}

export default HeroImage