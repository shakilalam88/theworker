import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import {service} from '../Sdata';

const ServiceAll = () => {
  const [sericeItem, setSericeItem] = useState(service)
  return (
    <>
    <section className="servicesSection">
      <div className="services">
        {sericeItem.map((item) => {
          const {id,img,name}= item
          return (
            <>
              <div className="service" key={id}>
                <div className="servImage">
                  <img src={img} alt="" />
                  <Link to={`/services/${name}`} className=''>
                    <button>click on</button>
                  </Link>
                </div>
                <h2>{name}</h2>
              </div>
            </>
          )
        })}
      </div>
    </section>
    </>
  )
}

export default ServiceAll