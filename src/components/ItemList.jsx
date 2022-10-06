import React from 'react'
import { useContext } from 'react'
import ItemContext from '../context/ItemContext'
import Item from './Item';


const ItemList = () => {
    const {items} = useContext(ItemContext);
  return (
    <div className='itemList'>
        <h1 className='label'>Item List</h1>
        {
            items.map((item)=>(
                <Item key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default ItemList