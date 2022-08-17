import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom'
import TocIcon from '@material-ui/icons/Toc';
import '../styles/Navbar.css';


function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () =>{
    setOpenLinks(!openLinks);
  }
    /*leftside = icone/logo 
      rightside = links/partes do site
    */
  return (
    <div className="navbar">
        <div className='leftSide' id={openLinks ? "open" : "close"}>
          <img src={Logo}/>
          <div className='hiddenLinks'>
            <Link to="/CacaoPizzaria"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
          </div>
        </div>
        <div className='rightSide'>
          <Link to="/CacaoPizzaria/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <button onClick={toggleNavbar}>
            <TocIcon/>
          </button>
        </div>
    </div>/*navbar*/
  )
}

export default Navbar