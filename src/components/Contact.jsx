import React from 'react'

const Contact = (props) => {
  const phone = props = "---,---,----";

  return (
      <div>
          <h1>Contact Me</h1>
          <p>Get in touch with me for any queries or feedback.</p>
          <p>Here is my business phone number: {phone}</p>
          <p>Connect with me on LinkedIn and check out my Github!</p>

          <div>
            <a href="https://www.linkedin.com/in/nishat-farhana/">
              <img className="contact-logos" src="src/assets/pink-linkedin.jpeg" alt= "linkedin logo"/>
            </a>
            <a href="https://github.com/Nemo080">
              <img className='contact-logos' src="src/assets/github.png" alt= "github logo"/>
            </a>
          </div>
      </div>
  );
};

export default Contact;