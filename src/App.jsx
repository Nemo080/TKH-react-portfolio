import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';



function App() {
  // const Navbar = () => {
  //   return (
  //     <nav className="navbar">
  //         <ul>
  //           <li>
  //             <Link to="/">Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/about">About</Link>
  //           </li>
  //           <li>
  //             <Link to="/contact">Contact</Link>
  //           </li>
  //         </ul>
  //     </nav>
  //   )
  // }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <hr />
          <Routes>
              <Route path ="/" element={<Home/>}/>
              <Route path ="/about" element={<About/>}/>
              <Route path ="/contact" element={<Contact props = "phone" />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
