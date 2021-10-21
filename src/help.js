import React from 'react';
import * as bs from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Help(props) {
   return (
      <bs.Container fluid className='p-4'>
         <bs.Row noGutters>
            <bs.Col style={{textAlign: 'center'}}>
               <FontAwesomeIcon icon={faInfoCircle} />
               Help
            </bs.Col>
         </bs.Row>
      </bs.Container>
   )
}

export default Help;