import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import '../styles/Footer.css'

function footer() {
  return (
    <div className='footer'>
        <div className='social__media'>
            <InstagramIcon/>
            <WhatsAppIcon/>
        </div>
        <p>&copy; 2022 https://maracujacake.github.io/CacaoPizzaria/</p>
    </div>
  )
}

export default footer