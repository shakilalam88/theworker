import React from 'react'

const ServiceBarHeader = ({text}) => {
    return (
        <section className="serviceHeader">
            <h2>{text}</h2>
            {/* <div className="left">
                <h2>{leftText}</h2>
            </div>
            <div className="right">
                <h2>{rightText}</h2>
            </div> */}
        </section>
    )
}

export default ServiceBarHeader