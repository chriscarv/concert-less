import React, { useState } from 'react';
import NavBar from './components/Nav';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import Cart from './components/Cart';
//import { Route, Routes } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);
  let component 
  switch(window.location.pathname){
    case "/":
      component = <HomePage />
      break
    case "/events":
      component = <EventsPage></EventsPage>
      break
    case "/cart":
      component = <Cart/>
  }

  
  return (
    <>
    <NavBar />
    {component}
    </>
  );
}

export default App;