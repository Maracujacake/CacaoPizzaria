import React from 'react';
import backgroundPizza from '../assets/pizzaLeft.jpg';
import "../styles/Contact.css"


function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={ {backgroundImage: `url(${backgroundPizza})`} }></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>

            <form id="contact-form" method='POST'>
                <label htmlFor='name'>Full Name:</label>
                <input id='name' placeholder='Enter your name' type="text" required/>

                <label htmlFor='email'>Email:</label>
                <input id='email' placeholder='Enter your Email' type="email" />

                <label htmlFor='message'>Message:</label>
                <textarea rows="6" placeholder='Type your message' name="message" required>  </textarea>

                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact