import React from 'react';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom";



function ProductCard(props) {
   const match = useRouteMatch("/category/:pid");
   const NAME_AR = Object.values(props.product.products)
   const rows =[]
   for (const p of NAME_AR) {
      if (match === null){
         rows.push(p)
      }
      else if (match.params.pid === p.category.title){
         rows.push(p)
      }
   } 
   return (
      <div>

         <bs.Container style={{marginTop: "2rem"}}>
            <bs.Row>
               {rows.map(n => {
                  return (
                     
                     <bs.Col md="3" key={n.id}>
                        <bs.Card bg="light" style={{ width: '12rem', marginBottom: "2rem"}}>
                           <bs.Card.Img src={`${process.env.PUBLIC_URL}/media/products/${n.filename}-1.png`} style={{paddingTop: '20px', marginTop: "-1.3rem"}}/>
                           <bs.Card.ImgOverlay>
                              <Link className='btn' to={`/product/${n.id}`} style={{ backgroundColor: "gray",position: "absolute", marginTop: "-1rem", marginLeft: "5.5rem"}}>Details</Link>
                           </bs.Card.ImgOverlay>
                           <bs.Card.Header className="text-center">
                              <bs.Card.Title>{n.name}</bs.Card.Title>
                              <bs.Card.Text>${n.price}</bs.Card.Text>
                           </bs.Card.Header>
                        </bs.Card>
                     </bs.Col>
                     )
                  })}
            </bs.Row>
         </bs.Container>
      </div>
   )
}

export default ProductCard;