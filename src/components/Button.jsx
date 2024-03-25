import React from 'react'


const MyButton = ({ to }) => { 
  
    return ( 
        <a href={`/${to}`}> 
            <button className="my-button btn text-black text-lg my-4"> 
                Check out my Projects {to === '' ? "home" : to === "/portfolio"} 
            </button> 
        </a> 
    ) 
} 
  
export default MyButton;
