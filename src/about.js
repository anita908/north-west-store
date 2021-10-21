import React from 'react';
import * as bs from 'react-bootstrap';


function About(props) {
   return (
      <bs.Container fluid className='p-4'>
         <bs.Row noGutters>
            <bs.Col style={{textAlign: 'center'}}>
               This is About Page
            </bs.Col>
         </bs.Row>
      </bs.Container>
   )
}

export default About;