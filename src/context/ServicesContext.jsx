import React, { createContext } from 'react';
import Services from '../Pages/Services';
import { service } from '../Sdata';


const services = createContext();
// console.log(service);

const ServicesContext = () => {
  return (
    <services.Provider value={service}>
      <Services />
    </services.Provider>
  )
}

export default ServicesContext
export { services }