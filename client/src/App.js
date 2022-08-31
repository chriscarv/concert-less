import React, { useState } from 'react';
import NavBar from './components/Nav';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import Cart from './components/Cart';
import { Route, Routes } from "react-router-dom";

function App() {
  
  
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/events' element={<EventsPage />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </>
  );
}

export default App;