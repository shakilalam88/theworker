import React from 'react'

const ServiceBarHeader = ({leftText,rightText}) => {
    return (
        <section className="serviceHeader">
            <div className="left">
                <h2>{leftText}</h2>
            </div>
            <div className="right">
                <h2>{rightText}</h2>
            </div>
        </section>
    )
}

export default ServiceBarHeader