import React from 'react';
import EventList from './EventList';

//import events from '../events';


function EventsPage(props){
     const { events } = props;

    return(
       <>
       {events.map((event) => (
        <EventList key={event.id} event={event}></EventList>
       ))}
       </>
    )
}

export default EventsPage;