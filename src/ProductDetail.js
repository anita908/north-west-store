import React from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";
import AppContext from './context'
import * as bs from 'react-bootstrap'



function ProductDetail(props) {
   const match = useRouteMatch("/product/:pid");
   const [img_idx, setImgIdx] = React.useState("1")
   const context = React.useContext(AppContext)
   const product = context.products[match.params.pid]
   const history = useHistory()


   if (!product){
      return (
         <h1 style={{textAlign: "center", marginTop: "20px"}}>Not Found</h1>
      )
   }
   else {
      return (
         <div className="d-flex flex-row">
            <div key={product.id}  style={{marginTop: "25px", marginLeft: "10px"}}>
               <h2>{product.name}</h2>
               <h3>${product.price}</h3>
               <p>{product.description}</p>
               <p className="mt-5">
                <bs.Button
                    variant="warning"
                    onClick={e => {
                        context.addToCart(product.id)
                        history.push('/cart')
                    }}
                     >
                        Add to Cart
                     </bs.Button>
               </p>
            </div>
            <div className="float-right" style={{marginTop: "25px", marginLeft: "5px"}}>
               <img alt="main" className="border" style= {{height:300, width:300}} src={`${process.env.PUBLIC_URL}/media/products/${product.filename}-${img_idx}.png`}></img>
               <div>
                  {['1', '2', '3', '4'].map(img_idx =>
                     (
                        <img alt="smaller" src={`${process.env.PUBLIC_URL}/media/products/${product.filename}-${img_idx}.png`}
                        className = "border rounded at at-3 mx-1"
                        style= {{height:30, width:30}}
                        onMouseEnter={e=>{
                           setImgIdx(img_idx)
                        }}
                        />
                     ))}
               </div>
            </div>
         </div>
      )
   }
}

export default ProductDetail;