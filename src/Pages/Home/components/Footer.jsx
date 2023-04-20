import React from 'react'
import logo from "../assets/logo.png"
import { Button } from 'react-bootstrap';
import twticon from "../assets/links/UI/twitter.png"
import fbicon from "../assets/links/UI/facebook.png"
import igicon from "../assets/links/UI/instagram.png"

import "../styles/footer.css";




const Footer = () => {

  function ImageButton(props) {
    return (
      <button className="image-button" onClick={props.onClick}>
        <img src={props.image} alt={props.alt} />
      </button>
    );
  };

  function handleClick() {
    
  };


  return (
    <>
    <div className="footer-container">
      <div className="footer-content">

        <div className="footer-content-items">

          <div className="footer-row1">


            <div className="footer-row1-col1">

              <div className="footer-row1-col1-row1">
                <img src={logo }></img>
              </div>

              <div className="footer-row1-col1-row2">
              Jl. Siliwangi No 123, Cibadak, Cibadak, Sukabumi,
              Jawa Barat 43351, Indonesia, (0266)531333
              </div>

              <div className="footer-row1-col1-row3">
                <p>info@smpn1cibadak.sch.id</p>
                <p>smpn1cbd_kabsi@yahoo.co.id</p>
              </div>

            </div>


            <div className="footer-row1-col2">
              <h3>Anything</h3>
              <p>Sambutan</p>
              <p>something</p>
              <p>something</p>
              <p>something</p>
            </div>


            <div className="footer-row1-col3">
              <h3>Anything</h3>
              <p>something</p>
              <p>something</p>
              <p>something</p>
              <p>something</p>
              <p>something</p>
            </div>


            <div className="footer-row1-col4">
              <h3>Social Media</h3>
              <div className="button-group">
              <ImageButton image={twticon} alt="twitter" onClick={handleClick} />
              <ImageButton image={fbicon} alt="facebook" onClick={handleClick} />
              <ImageButton image={igicon} alt="instagram" onClick={handleClick} />
              </div>
            </div>


          </div>


        <div className="footer-row2">
          <p>Copyright © SMP Negeri 1 Cibadak. All right Reserved. Hosting By IDCloudHost</p>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer