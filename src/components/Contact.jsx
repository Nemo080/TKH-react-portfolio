import React from 'react'

const Contact = (props) => {
  const phone = props = "---,---,----";

  return (
      <div className='justify-center justify-items-center'>
          <h1 className="text-6xl font-bold my-2.5 mb-10">Contact Me</h1>
          <img src="/random.gif" alt = "gif of a animated girl and cat"/>
          <p>Get in touch with me for any queries or feedback.</p>
          <p>Here is my business phone number: {phone}</p>
          <p>Connect with me on LinkedIn and check out my Github!</p>

          <div className='block'>
            <a href="https://www.linkedin.com/in/nishat-farhana/">
              <img className="contact-logos" src="/pink-linkedin.jpeg" alt= "linkedin logo"/>
            </a>
            <a href="https://github.com/Nemo080">
              <img className='contact-logos' src="/github.png" alt= "github logo"/>
            </a>
          </div>
      </div>
  );
};

export default Contact;