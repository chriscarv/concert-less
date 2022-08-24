import React from 'react';
import NavBar from './components/Nav';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
//import { Route, Routes } from "react-router-dom";

function App() {
  let component 
  switch(window.location.pathname){
    case "/":
      component = <HomePage />
      break
    case "/events":
      component = <EventsPage />
      break

  }

  
  return (
    <>
    <NavBar />
    {component}
    </>
  );
}

export default App;
