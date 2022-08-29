import React from 'react';

function EventsPage(){
    return(
     <>
        <h1>Events page</h1>
        <div className='col'>
            <div className='card'>
                <img className='flyer' src={require('../images/bv9-1.jpeg')} alt='broken vow flyer' />
                <p className='event '>Broken Vow</p>
                <p className='event '>9-01</p>
                <button className='buy'>Buy Tickets</button>
            </div>
            <div className='card'>
                <img className='flyer' src={require('../images/ysd9-1jpeg.jpeg')} alt='your spirit dies flyer' />
                <p className='event '>Your Spirit Dies</p>
                <p className='event'>9-01</p>
                <button className='buy'>Buy Tickets</button>
            </div>

        </div>
      </>   
    )
}

export default EventsPage;