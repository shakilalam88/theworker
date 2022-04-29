import React,{useState} from 'react';
import AccordionItem from './AccordionItem';
import {accordion} from '../Sdata';
// import './AccorNew.css'

const Accordion = () => {
  const [items, setItems] = useState(accordion);
  return (
    <>
      <div className="accordion">
        <section className='info'>
        {
          items.map((items)=>{
            return <AccordionItem kye={items.id}{...items}/>
          })
        }
        </section>
      </div>
    </>
  );
};

export default Accordion;
