import React from 'react'

export default function Portfolio() {
  return (
    <>
        <h1 className="text-6xl font-bold my-2.5 mb-10">Projects</h1>
        <div className='portfolio-container mx-20'>
            <div className='portfolio-item'>
                <h2 className='text-2xl font-bold my-4'>About Me</h2>
                <p className='my-4'>Just a teeny tiny bit about me. <br/> About Me was programmed using HTML and CSS</p>
                <img className= "project-img" src="/AboutMeAssignment.png" alt='about me'/>
                <div className='text-right mt-12'>
                   <a href="https://github.com/Nemo080/Portfolio-aboutme" target="_blank" rel="noopener noreferrer">Github Repo</a>
                </div>
            </div>
            <div className='portfolio-item'>
                <h2 className='text-2xl font-bold my-4'>Adventure</h2>
                <p className='my-4'>Wanna have lunch? Well, your options are limited but have a go at this small little lunch adventure and see what you end on. <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="/Adventure.png" alt="lunch adventure"/>
                <div className='text-right mt-12'>
                    <a href="https://github.com/Nemo080/TKH-adventure" target="_blank" rel="noopener noreferrer">Github Repo</a>
                </div>
            </div>
            <div className='portfolio-item'>
                <h2 className='text-2xl font-bold my-4'>Rock, Paper, Scissors!</h2>
                <p className='my-4'>Can you beat a computer at rock, paper, scrssors? Let's see you try! <br /> Fully programmed with JavaScript</p>
                <div className='place-items-center'>
                    <img className='project-img' src="/RPSGame.png" alt= "rock, paper. scissors game" />
                </div>
                <div className='text-right mt-12'>
                    <a href="https://github.com/Nemo080/TKH-RPSGame" target="_blank" rel="noopener noreferrer">Github Repo</a>
                </div>
            </div>
            <div className='portfolio-item'>
                <h2 className='text-2xl font-bold my-4'>Knights of JavaScript</h2>
                <p className='my-4'>Two-player game... see who can beat the other! <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="/KJSGame.png" alt="knights of javascript" />
                <div className='text-right mt-12'>
                <a href="https://github.com/Nemo080/TKH-KJS" target="_blank" rel="noopener noreferrer">Github Repo</a>
                </div>
            </div>
            <div className='portfolio-item'>
                <h2 className='text-2xl font-bold my-4'>Grocery List</h2>
                <p className='my-4'>It's just a random list of groceries.... What did you think...? <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="/Grocerylist.png" alt="grocery list"/>
                <div className='text-right mt-12'>
                <a href="https://github.com/Nemo080/TKH-GroceryList" target="_blank" rel="noopener noreferrer">Github Repo</a>
                </div>
            </div>
            <div className='portfolio-item'>
                <h2 className='text-2xl font-bold my-4'>Anime API</h2>
                <p className='my-4'>No idea what Spy x Family is? Well, learn about it then... :) <br /> Programmed with HTML, CSS, JavaScript</p>
                <img className='project-img' src="/animeAPI.png" alt="spy x family anime api"/>
                <div className='text-right mt-12'>
                <a href="https://github.com/Nemo080/anime-api" target="_blank" rel="noopener noreferrer">Github Repo</a>
                </div>
            </div>
        </div>
    </>
  )
}
