import React from "react";
//import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Nav(){
    return(
        <header>
            
                <nav>
                   <h2><a href="/">TicketLess</a></h2> 
                    <ul>
                        <a href="/events">Events</a>
                    </ul>
                    <ul>
                        <a href="/cart">Cart</a>
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