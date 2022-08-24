import React from 'react';
import NavBar from './components/Nav';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import Login from './components/Login';
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
    case "/login":
      component = <Login />
  }

  
  return (
    <>
    <NavBar />
    {component}
    </>
  );
}

export default App;
