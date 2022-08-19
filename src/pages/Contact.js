import React from 'react';
import backgroundPizza from '../assets/pizzaLeft.jpg';
import "../styles/Contact.css"


function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={ {backgroundImage: `url(${backgroundPizza})`} }></div>
        <div className='rightSide'>
            <h1>Entre em contato</h1>

            <form id="contact-form" method='POST'>
                <label htmlFor='name'>Nome completo:</label>
                <input id='name' placeholder='Digite seu nome' type="text" required/>

                <label htmlFor='email'>Email:</label>
                <input id='email' placeholder='Digite seu email' type="email" />

                <label htmlFor='message'>Mensagem:</label>
                <textarea rows="6" placeholder='Digite sua mensagem' name="message" required>  </textarea>

                <button type='submit'>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Contact