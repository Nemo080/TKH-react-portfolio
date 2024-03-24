import React from 'react'

export default function Portfolio() {
  return (
    <>
        <h1 className="text-6xl font-bold">Portfolio</h1>
        <p>Hi there! I'm Nishat. A TKH fellow and this is my porfolio made with React. It is a SPA. :)</p>
        <div className='portfolio-container'>
            <div className='portfolio-item'>
                <h2>About Me</h2>
                <p>Just a teeny tiny bit about me. <br/> About Me was programmed using HTML and CSS</p>
                <img className= "project-img" src="/AboutMeAssignment.png" alt='about me'/>
                <a className="project-atag" href="https://github.com/Nemo080/Portfolio-aboutme">Github Repo</a>
            </div>
            <div className='portfolio-item'>
                <h2>Adventure</h2>
                <p>Wanna have lunch? Well, your options are limited but have a go at this small little lunch adventure and see what you end on. <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="/Adventure.png" alt="lunch adventure"/>
                <a className="project-atag" href="https://github.com/Nemo080/TKH-adventure">Github Repo</a>
            </div>
            <div className='portfolio-item'>
                <h2>Rock, Paper, Scissors!</h2>
                <p>Can you beat a computer at rock, paper, scrssors? Let's see you try! <br /> Fully programmed with JavaScript</p>
                <img className='project-img' src="/RPSGame.png" alt= "rock, paper. scissors game" />
                <a className="project-atag" href="https://github.com/Nemo080/TKH-RPSGame">Github Repo</a>
            </div>
            <div className='portfolio-item'>
                <h2>Knights of JavaScript</h2>
                <p>Two-player game... see who can beat the other! <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="/KJSGame.png" alt="knights of javascript" />
                <a className="project-atag" href="https://github.com/Nemo080/TKH-KJS">Github Repo</a>
            </div>
            <div className='portfolio-item'>
                <h2>Grocery List</h2>
                <p>It's just a random list of groceries.... What did you think...? <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="/Grocerylist.png" alt="grocery list"/>
                <a className="project-atag" href="https://github.com/Nemo080/TKH-GroceryList">Github Repo</a>
            </div>
            <div className='portfolio-item'>
                <h2>Anime API</h2>
                <p>No idea what Spy x Family is? Well, learn about it then... :) <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="/animeAPI.png" alt="spy x family anime api"/>
                <a className="project-atag" href="https://github.com/Nemo080/anime-api">Github Repo</a>
            </div>
        </div>
    </>
  )
}
