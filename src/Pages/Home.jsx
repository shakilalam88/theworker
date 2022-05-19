import React from 'react'
import HeroImage from '../Component/HeroImage'
import Testimonial from '../Component/Testimonial';
import Form from '../Component/Form';
import Outlet from '../Component/Outlet';
import BestOffer from '../Component/BestOffer';
import OurService from '../Component/OurService';
import WhyChooseUs from '../Component/WhyChooseUs';
import HomePageService from '../Component/HomePageService';
import {RelatedService} from '../Sdata'
import  {service} from '../Sdata'
const Home = () => {
  return (
    <>
      <HeroImage />
      <div className="wrapper">
        <OurService/>
        <HomePageService text1='service' text2='related service' dataLeft={service} dataRight={RelatedService}/>
        <HomePageService text1='service' text2='related service' dataLeft={service} dataRight={RelatedService}/>
        <HomePageService text1='service' text2='related service' dataLeft={service} dataRight={RelatedService}/>
        <BestOffer/>
        <WhyChooseUs/>
        <Testimonial />
        <Outlet/>
        <Form/>
      </div>

    </>
  )
}

export default Home