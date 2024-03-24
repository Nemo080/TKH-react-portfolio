import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
          <ul>
            <li>
                <Link to="/">
                  <img className= "nav-img" src="/navcat.png" alt/>
                </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
      </nav>
    // <>
        // <div className="navbar bg-base-100">
        //     <div className="flex-1">
        //         <a className="btn btn-ghost text-xl">daisyUI</a>
        //     </div>
        //     <div className="flex-none">
        //         <button className="btn btn-square btn-ghost">
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        //         </button>
        //     </div>
        // </div>
    // </>

  )
}
