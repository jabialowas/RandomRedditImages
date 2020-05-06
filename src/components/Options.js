import React, {useEffect, useState} from 'react';
import {Accordion, Container, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Options({allowNSFW,statusNSFW}) {
    const [scroll, setScroll] = useState(false);

    // useEffect(() => {
    //             const interval = setInterval(() => {
    //                 window.scrollBy(0,1);
    //             },1);
    //     return () => clearInterval(interval);
    // },[scroll])

    const nsfwLabel = statusNSFW ? "NSFW" : "SFW"
    return (
       <>
           <Accordion style={{
               background: 'white',
               margin: '10px',

           }}>
               <Accordion.Toggle as={Button} variant="light" eventKey="0">
                   Options
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="0">
                   <>
                   <Form.Check
                       onClick={allowNSFW}
                       type='switch'
                       id='nsfw_switch'
                       label={nsfwLabel}/>
                   <Form.Check
                       onClick={() =>   setScroll(prev => !prev)}
                       type='switch'
                       id='autoScroll'
                       label="autoScroll"
                   />
                       </>
               </Accordion.Collapse>
           </Accordion>

           </>
    );
}

export default Options;