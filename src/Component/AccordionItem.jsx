import React,{useState} from 'react';

const AccordionItem = ({id,info,title}) => {
    const [toggle, setToggle] = useState(false);
  return (
      <>
      <article className='question'>
            <header>
            <h3>{title}</h3>
            <button className='btnaccorNew' onClick={()=>{setToggle(!toggle)}}>{toggle?'-':"+"}</button>
            </header>
            {/* {toggle ?<p>{info}</p>:null} */}
            {toggle && <p>{info}</p>}  
        </article>
      </>
  );
};

export default AccordionItem;
