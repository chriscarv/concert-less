import React from 'react';
import events from '../events';

function EventsPage(){
    return(
     <>
        <h1>Events page</h1>
        <div className='col'>
            <div className='card'>
            { events.map( event => {
                return(
                    
                    <div key={event.id}>
                    <img className='flyer' src={event.imgUrl} alt="alt" />
                    <p className='event'>{event.name}</p>
                    <p className='event'>{event.date}</p>
                    </div>
                    
                )
            })}

            </div>

        </div>
      </>   
    )
}

export default EventsPage;