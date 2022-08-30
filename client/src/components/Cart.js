import React from 'react';
import { useState } from 'react';

function Cart(){
    const [cartItems, setCartItems] = useState([]);
    return(
        <>
        <h1>Cart</h1>
        <h1>{cartItems.length === 0 && <p className='event'>Cart Is Empty</p>}</h1>
        </>
    )
}

export default Cart;