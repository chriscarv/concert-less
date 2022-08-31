import React from "react";
//import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Nav(){
    return(
        <header>
            
                <nav>
                    <ul>
                      <h2><a href="/">TicketLess</a></h2>   
                    </ul>
                   
                    <ul>
                        <h2><a href="/events">Events</a></h2>
                    </ul>
                    <ul>
                        <h2><a href="/cart">Cart</a></h2>
                    </ul>
                </nav> 
        </header>
    )
}

/*
function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
*/

export default Nav;