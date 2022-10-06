import React from 'react'
import { useContext } from 'react'
import ItemContext from '../context/ItemContext'

const Cart = () => {
   const {cartItems,dispatchCart} = useContext(ItemContext);

    return (
    <div className='cart'>
        <h3>Cart ({!cartItems? '0': cartItems.length})</h3>
        {cartItems.length < 1 ? (
            <h1>There is no result</h1>
        ):(
            cartItems.map((cartitem)=>(
                <div className='cartItem' key={cartitem.id}>
                    <span>{cartitem.name}</span>
                    <span>{cartitem.price}</span>
                    <button className='cartItemButton'
                    onClick={()=>dispatchCart({type: 'REMOVE_FROM_CART',payload:cartitem})}>
                        remove
                    </button>
                </div>
            ))
        )}
    </div>
  )
}

export default Cart