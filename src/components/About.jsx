import React from 'react'

const About = () => { 
  const Summary = () => {
    return (
        <div className='about-container mx-20'>
          <div className='about-item'>
            <h3 className='text-lg font-bold'>Background</h3>
          </div>
          <div className='about-item'>
            <p className='my-4'>Hi! I am Nishat. I am currently a fellow at The Knowledge House. I have been in the technical world since 2021. I have always liked tinkering and making things with my hands so in a way coding or programming to me felt as if I was building something from scratch and putting together for someone to use with my hands.</p>
          </div>
          <div className='about-item'>
            <h3 className='text-lg font-bold'>Mission Statement</h3>
          </div>
          <div className='about-item'>
            <p className='my-4'>I want to make dynamic websites that are accessible, fun and informative to interact with.</p>
          </div>
          <div className='about-item'>
            <h3 className='text-lg font-bold'>Expertise and Specialization</h3>
          </div>
          <div className='about-item'>
            <p className='my-4'>Front-End Development</p>
            <p className='my-4'>Web Development</p>
          </div>
          <div className='about-item'>
            <h3 className='text-lg font-bold'>Technologies and Tools</h3>
          </div>
          <div className='about-item'>
            <p className='my-4'>HTML</p>
            <p className='my-4'>CSS</p>
            <p className='my-4'>JavaScript</p>
            <p className='my-4'>React</p>
          </div>
          <div className='about-item'>
            <h3 className='text-lg font-bold'>Client Focus</h3>
          </div><div className='about-item'>
            <p className='my-4'>N/A</p>
          </div>
          <div className='about-item'>
            <h3 className='text-lg font-bold'>Value Proposition</h3>
          </div>
          <div className='about-item'>
            <p className='my-4'>N/A</p>
          </div>
          <div className='about-item'>
            <h3 className='text-lg font-bold'>Commitment to Quality</h3>
          </div>
          <div className='about-item'>
            <p className='my-4'>N/A</p>
          </div>
          <div className='about-item'>
            <h3 className='text-lg font-bold'>Client-Centric Approach</h3>
          </div><div className='about-item'>
            <p className='my-4'>N/A</p>
          </div>
          <div className='about-item'>
            <h3 className='text-lg font-bold'>Eduation and Certifications</h3>
          </div>
          <div className='about-item'>
            <p className='my-4'>BBA in Computer Information Systems</p>
            <p className='my-4'>The Knowledge House: Innovation Fellowship</p>
          </div>
        </div>
    )
  }
  return ( 
    <div> 
      <h1 className="text-6xl font-bold my-2.5 mb-10">About Me</h1> 
      <Summary />
    </div> 
  ); 
}; 


export default About;
