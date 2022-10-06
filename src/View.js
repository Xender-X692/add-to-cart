import React from 'react'
import Cart from './components/Cart'
import ItemList from './components/ItemList'
function View () {
  return (
    <div className='container'>
        <ItemList/>
        <Cart/>
    </div>
  )
}

export default View