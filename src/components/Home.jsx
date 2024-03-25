import React from 'react';
import Portfolio from './Portfolio.jsx';
import { Link } from 'react-router-dom';
import MyButton from './Button.jsx';

const Home = () => { 
  return (
   <>
      <h1 className="text-6xl font-bold my-4">Nishat's Portfolio</h1>
      <div className='home relative'>
          <img className="home-me my-4" src="/me.png" alt="drawing of me"/>
          <div>
              <p className='my-1 mx-8'>Hi there! I'm Nishat. A TKH fellow and this is my porfolio made with React. It is a SPA. :)</p>
              <MyButton to="portfolio"/>
              <h3 className="text-3xl font-bold my-4 mt-20">Skills</h3>
              <div className="inline-flex my-8">
                <img className='mx-6 animate-pulse' src="/whitehtml.png" alt="white colored html"/>
                <img className='mx-6 animate-pulse' src="/whitecss.png" alt="white colored CSS"/>
                <img className='mx-6 animate-pulse' src="/whiteJS.png" alt="white colored JS"/>
                <img className='mx-6 animate-pulse' src="/whitereact.png" alt="white colored react" />
              </div>
          </div>
      </div>
   </>
  ); 
}; 

export default Home;

