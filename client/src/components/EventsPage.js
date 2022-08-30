import React from 'react';
//import { useState } from 'react';
import events from '../events';
import Cart from './Cart';

function EventsPage(props){
     

    return(
     <>
        <h1>Events</h1>
        <div className='col'>
            <div className='card'>
            { events.map( event => {
                return(
                    <>
                    <div key={event.id}>
                    <img className='flyer' src={event.imgUrl} alt="alt" />
                    <p className='event'>{event.name}</p>
                    <p className='event'>{event.date}</p>
                    <div className='event'>price: ${event.price} </div>
                    <button className='buy'>Buy Now</button>
                    </div>
                    <Cart></Cart>
                    </>
                )
            })}

            </div>

        </div>
      </>   
    )
}

export default EventsPage;