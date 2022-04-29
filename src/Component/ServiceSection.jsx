import React from 'react';
import Services from '../Pages/Services';

const ServiceSection = ({data}) => {
  return (
    <section className="servicesSection">
          <div className="left">
            <div className="services">
              {data.map((item) => {
                return (
                  <>
                    <Services key={item.id} {...item} />
                  </>
                )
              })}
            </div>
          </div>
          <div className="right servicesRelatedPro">
            <div className="services">
            {data.map((item) => {
                return (
                  <>
                    <Services key={item.id} {...item} />
                  </>
                )
              })}
            </div>
          </div>
        </section>
  )
}

export default ServiceSection