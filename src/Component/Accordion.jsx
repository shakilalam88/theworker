import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({item}) => {
  return (
    <>
      <div className="accordion">
        <div className='info'>
        {
          item.map((items)=>{
            return <AccordionItem key={items.id}{...items}/>
          })
        }
        </div>
      </div>
    </>
  );
};

export default Accordion;
