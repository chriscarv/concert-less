import React from 'react'

export default function EventList(props) {
    const {event} = props;
    return(
        <>
        <h1>Events</h1>
        <div className='col'>
            <div className='card'>
        
                    <img className='flyer' src={event.imgUrl} alt="alt" />
                    <p className='event'>{event.name}</p>
                    <p className='event'>{event.date}</p>
                    <div className='event'>price: ${event.price} </div>
                    <button className='buy'>Buy Now</button>

            </div>

        </div>
        </>
    )
}