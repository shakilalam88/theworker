import React from 'react'

const Services = ({id,img,name}) => {
  return (
    <div className="service" key={id}>
      <div className="servImage">
        <img src={img} alt="" />
        <a href=""><button>click on</button></a>
      </div>
      <h2>{name}</h2>
    </div>
  )
}

export default Services