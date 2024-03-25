import React from 'react'
import { Link } from 'react-router-dom';


const MyButton = ({ to }) => { 
  
    return ( 
        <a href={`/${to}`}> 
            <Link to="/portfolio">
                <button className="my-button btn text-black text-lg my-4"> 
                    Check out my Projects {to === '' ? "home" : to === 'portfolio' } 
                </button> 
            </Link>
        </a> 
    ) 
} 
  
export default MyButton;
