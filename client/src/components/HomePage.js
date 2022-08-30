import React from 'react';
import photo from '../images/main.jpeg';
function HomePage() {

    return(
        <div className='homepage'>
            
            <img className="jumbotron" src={photo} alt="osc"></img>
            <p>tickets</p>
        </div>
    )
}

export default HomePage;