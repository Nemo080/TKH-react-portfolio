import React from 'react'

export default function Portfolio() {
  return (
    <>
        <div className='portfolio-container'>
            <div className='portfolio-item'>
                <h2>About Me</h2>
                <p>Just a teeny tiny bit about me. <br/> About Me was programmed using HTML and CSS</p>
                <img className= "project-img" src="src/assets/AboutMeAssignment.png" alt='about me'/>
            </div>
            <div className='portfolio-item'>
                <h2>Adventure</h2>
                <p>Wanna have lunch? Well, your options are limits but have a go at this small little lunch adventure and see what you end on. <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="src/assets/Adventure.png" alt="lunch adventure"/>
            </div>
            <div className='portfolio-item'>
                <h2>Rock, Paper, Scissors!</h2>
                <p>Can you beat a computer at rock, paper, scrssors? Let's see you try! <br /> Fully programmed with JavaScript</p>
                <img className='project-img' src="src/assets/RPSGame.png" alt= "rock, paper. scissors game" />
            </div>
            <div className='portfolio-item'>
                <h2>Knights of JavaScript</h2>
                <p>Two-player game... see who can beat the other! <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="src/assets/KJSGame.png" alt="knights of javascript" />
            </div>
            <div className='portfolio-item'>
                <h2>Grocery List</h2>
                <p>It's just a random list of groceries.... What did you think...? <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="src/assets/Grocerylist.png" alt="grocery list"/>
            </div>
            <div className='portfolio-item'>
                <h2>Anime API</h2>
                <p>No idea what Spy x Family is? Well, learn about it then... :) <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="src/assets/animeAPI.png" alt="spy x family anime api"/>
            </div>
        </div>
    </>
  )
}
