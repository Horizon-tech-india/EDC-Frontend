import React, { useState } from 'react';
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';


const Navigation = () => {

  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes({activePage})){
      link.classList.add('current');
    }
  })


  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 400){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);


  
  return (
    <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <ul className="nav-list">
        <li className="nav-item"><NavLink to="/home"  className="main-nav" >Home</NavLink></li>
        <li className="nav-item"><NavLink to="/application" className="main-nav"  >Application Status</NavLink></li>
        <li className="nav-item"><NavLink to="/document" className="main-nav"  >Document</NavLink></li>
        <li className="nav-item"><NavLink to="/" className="main-nav"  >N/A</NavLink></li>
        <li className="nav-item"><NavLink to="/" className="main-nav"  >N/A</NavLink></li>
        <li className="nav-item"><NavLink to="/" className="main-nav"  >N/A</NavLink></li>
        <li className="nav-item"><NavLink to="/" className="main-nav"  >N/A</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;