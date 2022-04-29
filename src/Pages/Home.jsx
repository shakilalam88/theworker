import React from 'react'
import HeroImage from '../Component/HeroImage'
import { service } from '../Sdata';
import ServiceBarHeader from '../Component/ServiceBarHeader';
import ServiceSection from '../Component/ServiceSection';
import Testimonial from '../Component/Testimonial';
import Form from '../Component/Form';
import Outlet from '../Component/Outlet';
import BestOffer from '../Component/BestOffer';
import OurService from '../Component/OurService';
import WhyChooseUs from '../Component/WhyChooseUs';

const Home = () => {
  return (
    <>
      <HeroImage />
      <div className="wrapper">
        <OurService/>
        <ServiceBarHeader leftText='service' rightText='related products' />
        <ServiceSection data={service} />
        <ServiceBarHeader leftText='regular service' rightText='' />
        <ServiceSection data={service} />
        <ServiceBarHeader leftText='' rightText='' />
        <ServiceSection data={service} />
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