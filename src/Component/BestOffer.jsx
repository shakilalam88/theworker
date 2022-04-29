import React from 'react';
import ButtonGreen from '../Component/ButtonGreen';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BestOffer = () => {
  return (
    <section className="col bestOffer">
          <div className="left">
            <div className="bestOfferImg">
              <div className="offerImg img-one"><img src="./Images/services/paint.jpg" alt="image" /></div>
              <div className="offerImg img-two"><img src="./Images/services/paint.jpg" alt="image" /></div>
              <div className="offerImg img-three"><img src="./Images/services/paint.jpg" alt="image" /></div>
            </div>
          </div>
          <div className="right">
            <div className="bestOfferText">
              <h2>today best offers</h2>
              <a href=""><ButtonGreen text='view' /></a>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, in. Provident sint totam quia ipsum.</p>
              <ul>
                <li><CheckCircleIcon /> Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                <li><CheckCircleIcon /> Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                <li><CheckCircleIcon /> Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                <li><CheckCircleIcon /> Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
              </ul>
              <a href=""><ButtonGreen text='read more' /></a>
            </div>
          </div>
        </section>
  )
}

export default BestOffer