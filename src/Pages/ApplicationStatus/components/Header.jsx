import React from 'react'
import "../styles/header.css";

const Header = () => {

    const overlay_txt = "PROVIDE ALL THE DETAILS";
  return (
    <>
    <div className="bgImg">
        <div className="overlay">
            <h1>{ overlay_txt }</h1>
        </div>
    </div>
    </>
  )
}

export default Header