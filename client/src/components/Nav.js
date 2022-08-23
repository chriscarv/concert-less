import React from "react";

function Nav(){
    return(
        <header>
            <h2>Tickets</h2>
                <nav>
                    <ul>
                        <li><a href="/">Events</a></li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/">login</a>
                        </li>
                        <li>
                            <a href="/">signup</a>
                        </li>
                    </ul>
                </nav> 
        </header>
    )
}

export default Nav;