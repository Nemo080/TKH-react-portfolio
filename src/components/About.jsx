import React from 'react'

const About = () => { 
  const Summary = () => {
    return (
        <div className='about-container'>
          <div className='about-item'>
            <h3>Background</h3>
          </div>
          <div className='about-item'>
            <p>Hi! I am Nishat. I am currently a fellow at The Knowledge House. I have been in the technical world since 2021. I have always liked tinkering and making things with my hands so in a way coding or programming to me felt as if I was building something from scratch and putting together for someone to use with my hands.</p>
          </div>
          <div className='about-item'>
            <h3>Mission Statement</h3>
          </div>
          <div className='about-item'>
            <p>I want to make dynamic websites that are accessible, fun and informative to interact with.</p>
          </div>
          <div className='about-item'>
            <h3>Expertise and Specialization</h3>
          </div>
          <div className='about-item'>
            <p>Front-End Development</p>
            <p>Web Development</p>
          </div>
          <div className='about-item'>
            <h3>Technologies and Tools</h3>
          </div>
          <div className='about-item'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>
          <div className='about-item'>
            <h3>Client Focus</h3>
          </div><div className='about-item'>
            <p>N/A</p>
          </div>
          <div className='about-item'>
            <h3>Value Proposition</h3>
          </div>
          <div className='about-item'>
            <p>N/A</p>
          </div>
          <div className='about-item'>
            <h3>Commitment to Quality</h3>
          </div>
          <div className='about-item'>
            <p>N/A</p>
          </div>
          <div className='about-item'>
            <h3>Client-Centric Approach</h3>
          </div><div className='about-item'>
            <p>N/A</p>
          </div>
          <div className='about-item'>
            <h3>Eduation and Certifications</h3>
          </div>
          <div className='about-item'>
            <p>BBA in Computer Information Systems</p>
            <p>The Knowledge House: Innovation Fellowship</p>
          </div>
        </div>
    )
  }
  return ( 
    <div> 
      <h1>About Me</h1> 
      <Summary />
    </div> 
  ); 
}; 


export default About;
