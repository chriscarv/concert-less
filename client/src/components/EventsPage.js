import React, { useState } from 'react';
import events from '../events';
import Cart from './Cart';

function EventsPage(props){
    const [cart, setCart] = useState([]);
    const addToCart = (event) => {
        console.log('adddddd');
        console.log(cart)
        setCart([...cart], event);
    };
    const removeFromCart = (event) => {

    }

    const renderCart = () => {
        <>
        <h1>cart</h1>
        { cart.map( event => {
                return(
                    
                    <div key={event.id}>
                    <img className='flyer' src={event.imgUrl} alt="alt" />
                    <p className='event'>{event.name}</p>
                    <p className='event'>{event.date}</p>
                    <div className='event'>price: ${event.price} </div>
                    <button onClick={() => removeFromCart(event)}>Remove</button>
                    </div>
                  
                )
            })}
        </>
    } 
    return(
     <>
        <h1>Events</h1>
        <div className='col'>
            <div className='card'>
            { events.map( event => {
                return(
                    
                    <div key={event.id}>
                    <img className='flyer' src={event.imgUrl} alt="alt" />
                    <p className='event'>{event.name}</p>
                    <p className='event'>{event.date}</p>
                    <div className='event'>price: ${event.price} </div>
                    <button onClick={() => addToCart(event.id)} className='buy'>Buy Now</button>
                    </div>
                  
                )
            })}

            </div>
            <Cart></Cart>
        </div>
      </>   
    )
}

export default EventsPage;