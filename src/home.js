import React from 'react';
// import product from './products';
import ProductCard from "./ProductCard";
import AppContext from './context'

function Home(props) {
   const context = React.useContext(AppContext)

   return (
      <div>
         <ProductCard product={context}/>
      </div>
   )
}

export default Home;