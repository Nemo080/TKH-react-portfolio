import React from 'react'

const Contact = (props) => {
  // const phone = props = "---,---,----";
  const email = props = "nishatf01@gmail.com"

  return (
      <div className='inline-block'>
          <h1 className="text-6xl font-bold my-2.5 mb-10">Contact Me</h1>
          <img className="my-8" src="/random.gif" alt = "gif of a animated girl and cat"/>
          <p className="text-xl my-2">Get in touch with me for any queries or feedback.</p>
          <p className="text-xl my-2">Here is my business email: {email}</p>
          {/* <p className="text-xl my-2">Here is my business phone number: {phone}</p> */}
          <p className="text-xl my-2">Connect with me on LinkedIn and check out my Github!</p>
          <br></br>
          <a href='/Resume.pdf' target="_blank" rel="noopener noreferrer">Download Resume</a>
          <br></br>
          <div className='inline-flex'>
            <a href="https://www.linkedin.com/in/nishat-farhana/" target="_blank" rel="noopener noreferrer">
              <img className="contact-logos" src="/pink-linkedin.jpeg" alt= "linkedin logo"/>
            </a>
            <a href="https://github.com/Nemo080" target="_blank" rel="noopener noreferrer">
              <img className='contact-logos' src="/github.png" alt= "github logo"/>
            </a>
          </div>
      </div>
  );
};

export default Contact;