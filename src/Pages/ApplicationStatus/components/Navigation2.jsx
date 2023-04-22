import React, { useState } from 'react';
import '../styles/navbar2.css';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import { Menu } from "@mui/icons-material";


const Navigation = () => {

  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('current');
    }
  })

  
  return (
    <nav className='navbar2'>

      <div className="nav-logo">
         <img src={ logo }></img>
      </div>

      <ul className="nav-list">
        <div className='nav-links'>
          <li className="nav-item"><NavLink to="/home"  className="main-nav" >Home</NavLink></li>
          <li className="nav-item"><NavLink to="/application" className="main-nav"  >Application Status</NavLink></li>
          <li className="nav-item"><NavLink to="/document" className="main-nav"  >Document</NavLink></li>
          <li className="nav-item"><NavLink to="/" className="main-nav"  >N/A</NavLink></li>
          <li className="nav-item"><NavLink to="/" className="main-nav"  >N/A</NavLink></li>
          <li className="nav-item"><NavLink to="/" className="main-nav"  >N/A</NavLink></li>
          <li className="nav-item"><NavLink to="/" className="main-nav"  >N/A</NavLink></li>
        </div>
      </ul>

      <div className="ham-menu">
        < Menu sx={{color:"white"}} />
      </div>
    </nav>
  );
}

export default Navigation;