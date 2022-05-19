import React from 'react'
import Accordion from './Accordion';
import {accor} from '../Sdata'

const WhyChooseUs = () => {
  return (
    <>
    <section className='whychooseus'>
      <h2>why choose us</h2>
      <div className="whysection">
      <div className="left"><Accordion item={accor}/></div>
      <div className="right">
        <img src="./images/delivery.jpg" alt="" />
      </div>

      </div>

    </section>
    
    </>
  )
}

export default WhyChooseUs