import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Delivery from './components/delivery/Delivery';
import About from './components/about/About';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/delivery' element={<Delivery/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
