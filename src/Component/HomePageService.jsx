import React from 'react'
import ServiceBarHeader from './ServiceBarHeader';
import Services from '../Pages/Services';

const HomePageService = (props) => {
    console.log('homeservice',props.dataLeft);
    console.log('homeservice1',props.dataRight);
    return (
        <div className='HomePageService col'>
            <div className="serviceCategory left">
                <ServiceBarHeader text={props.text1} />
                <Services data={props.dataLeft}/>
            </div>
            <div className="relatedService right">
                <ServiceBarHeader text={props.text2} />
                <Services data={props.dataRight}/>
            </div>
        </div>
    )
}

export default HomePageService