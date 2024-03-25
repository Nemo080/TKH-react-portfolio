import React from 'react'
import Portfolio from './Portfolio.jsx';
import { Link } from 'react-router-dom';
import MyButton from './Button.jsx';

const Home = () => { 
  return (
   <>
      <h1 className="text-6xl font-bold my-4">Nishat's Portfolio</h1>
      <div className='home'>
          <img className="home-me my-4" src="/me.png"/>
          <div>
              <p className='my-1 mx-8'>Hi there! I'm Nishat. A TKH fellow and this is my porfolio made with React. It is a SPA. :)</p>
              <MyButton to="portfolio"/>
              <h3 className="text-3xl font-bold my-4 mt-20">Skills</h3>
              <div className="inline-flex">
                <img className='mx-4 animate-pulse' src="/whitehtml.png"/>
                <img className='mx-4 animate-pulse' src="/whitecss.png"/>
                <img className='mx-4 animate-pulse' src="/whiteJS.png" />
                <img className='mx-4 animate-pulse' src="/whitereact.png" />
              </div>
          </div>
      </div>
   </>
  ); 
}; 

export default Home;

