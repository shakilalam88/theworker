import React,{ useState } from 'react';
// import ServicesList from '../Component/ServicesList';
// import { services } from '../context/ServicesContext';
import { Link } from "react-router-dom";
// import {service} from '../Sdata';

const Services = (props) => {
  console.log('servicepage',props.data);
  // const [sericeItem, setSericeItem] = useState(service)
  return (
    <>
    <section className="servicesSection">
      <div className="services">
        {props.data.map((item)=>{
          return (
            <div className="service" key={item.id}>
                <div className="servImage">
                  <img src={item.img} alt="" />
                  <Link to={`/services/${item.name}`} className=''>
                    <button>click on</button>
                  </Link>
                </div>
                <h2>{item.name}</h2>
              </div>
          )
        })}
      </div>
    </section>
    </>
  )
}

export default Services