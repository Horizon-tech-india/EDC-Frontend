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

  const navLists = document.querySelector('.nav-list');
 
  const handleMenu = () => {
    if(navLists.classList.contains('activeMenu')) {
      navLists.classList.remove('activeMenu');
    }
    else {
      navLists.classList.add("activeMenu");
    }
  }

  const handleMenuForLinks = () => {
    navLists.classList.remove('activeMenu');
  }


  

  return (
    <nav className='navbar2'>

      <div className="nav-logo">
         <img src={ logo }></img>
      </div>

      <ul className="nav-list" >
      
          <li className="nav-item" onClick={ handleMenuForLinks }><NavLink to="/home"  className="main-nav" >HOME</NavLink></li>
          <li className="nav-item" onClick={ handleMenuForLinks }><NavLink to="/application" className="main-nav"  >APPLY NOW</NavLink></li>
          <li className="nav-item" onClick={ handleMenuForLinks }><NavLink to="/documents" className="main-nav"  >DOCUMENTS</NavLink></li>
          <li className="nav-item" onClick={ handleMenuForLinks }><NavLink to="/dashboard" className="main-nav"  >DASHBOARD</NavLink></li>
          <li className="nav-item" onClick={ handleMenuForLinks }><NavLink to="/" className="main-nav"  >N/A</NavLink></li>
          <li className="nav-item" onClick={ handleMenuForLinks }><NavLink to="/" className="main-nav"  >N/A</NavLink></li>
          <li className="nav-item" onClick={ handleMenuForLinks }><NavLink to="/" className="main-nav"  >N/A</NavLink></li>
    
      </ul>

      <div className="ham-menu" onClick={ handleMenu }>
        < Menu sx={{color:"white" , fontSize: 40}} />
      </div>
    </nav>
  );
}

export default Navigation;