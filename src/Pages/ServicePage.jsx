import React from 'react';
import { useParams } from 'react-router-dom';
import { serviceMaterial } from '../Sdata';
import {question} from '../Sdata'
import Accordion from '../Component/Accordion';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ServicePage = (props) => {
  const params = useParams();
  // console.log(params);
  return (
    <>
      {params.name}
      <div className="servicesPage">
        <img src='/Images/service.png' alt="image" className='serviceHeroImg' />
        <div className="wrapper">
          <div className="container">
            <h2>Professional Plumbing Service in Delhi NCR</h2>
            <div className="service col">
              <div className="left">
                <h3>our services</h3>
                <ul>
                  <li>remodeling service</li>
                  <li>basement plumbing</li>
                  <li>bathroom plumbing</li>
                  <li>gas line plumbing </li>
                  <li>kitchen plumbing </li>
                </ul>
              </div>
              <div className="right">
                <h3>plumbing is what we do</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sit eum nulla voluptate, corrupti voluptatem tenetur aliquid consequatur aspernatur repudiandae incidunt dolore, qui ipsa omnis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sit eum nulla voluptate, corrupti voluptatem tenetur aliquid consequatur aspernatur repudiandae incidunt dolore, qui ipsa omnis.</p>
              </div>
            </div>
            <div className="reatedMaterial">
              <h2>Realated materials & products</h2>
              <div className="material">
                {serviceMaterial.map((Elem) => {
                  const { id, name, img } = Elem
                  return (
                    <div className="item" key={id}>
                      <img src={img} alt="" />
                      <h4>{name}</h4>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="saleOffer">
              <h2>offers</h2>
              <div className="col">
              <div className="left">
                <h3>10% to 35% off</h3>
                <p>select major appliances<br/> $396 or more</p>
                <p>plus <em>free</em> loacl delivery and haul away.</p>
                <p>offer ends 1/1/2023</p>
                <div className="buttonGrp">
                  <button>shop now</button>
                  <button>get details</button>
                </div>
              </div>
              <div className="right">
                <p>activetouch<sup>Tm</sup> </p>
                <h3>massage<br/>hand shower</h3>
                <div className="amount">
                <p>$53<sup>80</sup></p>
                <button>buy now</button>
                </div>
              </div>
              </div>
            </div>
            <div className="answere">
              <h2>frequently get answers</h2>
                <Accordion item={question}/>
            </div>
            <div className="whyChooseUs">
              <h2>Why Choose us</h2>
              <div className="choose">
                <div className="chooseItem">
                  <div className="moon"></div>
                    <ThumbUpIcon/>
                    <h4>quality</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ducimus maiores iusto quidem eos placeat!</p>
                </div>
                <div className="chooseItem">
                <div className="moon"></div>
                  <GroupsIcon/>
                  <h4>personnel</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda, officia quae ullam eveniet facilis?</p>
                </div>
                <div className="chooseItem">
                <div className="moon"></div>
                  <SettingsIcon/>
                  <h4>innovation</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, hic dignissimos? Exercitationem iusto quibusdam ex.</p>
                </div>
                <div className="chooseItem">
                <div className="moon"></div>
                  <FavoriteIcon/>
                  <h4>commmitment</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quaerat obcaecati libero ab quas! Vel!</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicePage