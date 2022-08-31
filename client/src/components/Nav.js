import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Nav(){
    return(
        <header>
            
                <nav>
                   <h2><Link to="/">TicketLess</Link></h2> 
                    <ul>
                        <CustomLink to="/events">Events</CustomLink>
                    </ul>
                    <ul>
                        <CustomLink to="/cart">Cart</CustomLink>
                    </ul>
                </nav> 
        </header>
    )
}


function CustomLink({ to, children, ...props }){
   const resolvedPath = useResolvedPath(to);
   const isActive = useMatch({ path: resolvedPath.pathname })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Nav;