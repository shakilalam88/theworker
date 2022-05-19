import React from 'react'
import { Link } from "react-router-dom";

const ServicesList = ({services}) => {
    console.log(services);
  return (
    <section className="servicesSection">
      <div className="services">
        {/* {services.map((item) => {
          const {id,img,name}= item
          return (
            <>
              <div className="service" key={id}>
                <div className="servImage">
                  <img src={img} alt="" />
                  <Link to={`/services/${id}`} className=''>
                    <button>click on</button>
                  </Link>
                </div>
                <h2>{name}</h2>
              </div>
            </>
          )
        })} */}
      </div>
    </section>
  )
}

export default ServicesList