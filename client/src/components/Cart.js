import React from 'react';

function Cart(props){
const { cartItems } = props;
    return(
        <>
        <h1>cart</h1>
        <h1>{cartItems.length === 0 && <p className='event'>Cart Is Empty</p>}</h1>
        </>
    )
}

export default Cart;