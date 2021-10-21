import React from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'
import { Link } from 'react-router-dom';

function Left_container(props) {

  const context = React.useContext(AppContext)
  // console.log(context)
  const categories = {}
  let category = []
  let productCount = 0
  for ( let p of Object.values(context.products)) {
    category.push(p)
    // categories[p.category] = (categories[p.category] || 0) + 1
    
    if (p.category in categories) {
      categories[p.category] = categories[p.category] + 1
      productCount = productCount + 1
    }
    else {
      categories[p.category] = 1
      productCount = productCount + 1
    }
  }
  return (
  <bs.Nav className="flex.column">
    
    <bs.Nav.Item>
    <Link
      to={`/`}
      className='nav-link'
      >
        All Product({productCount})
      </Link>
      {Object.entries(context.categories).map(([cats]) => (
        <Link 
        to={`/category/${cats}`}
        key = {cats} 
        className='nav-link'
        >
        {cats} 
        ({category.filter(function(categoryName){
          return categoryName.category.title === cats}).length})
        </Link>
      ))}
    </bs.Nav.Item>
  </bs.Nav>
  )}
   

export default Left_container;