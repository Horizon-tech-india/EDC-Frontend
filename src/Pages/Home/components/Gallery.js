import React from "react";
import { Button, styled } from "@mui/material";

// import Images from '../assets/UI';
import image1 from "../assets/UI/image1.png";
import image2 from "../assets/UI/image2.png";
import image3 from "../assets/UI/image3.png";
import image4 from "../assets/UI/image4.png";
import image5 from "../assets/UI/image5.png";
import image6 from "../assets/UI/image6.png";

import "../styles/gallery.css";

const GalleryCard = (props) => {
  const { image } = props;
  return (
    <div className="image">
      <img src={image} style={{ width: 480, height: 420 }}></img>
    </div>
  );
};

const Gallery = () => {
  const text = "Gallery";

  const SampleBtn = styled(Button)({
    backgroundColor: "#0193DC",
    padding: "12px 53px",
    fontSize: 16,
    fontFamily: "Open sans",
    fontWeight: 700,
    textTransform: "none",
    letterSpacing: 0.7,
  });

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-content">
          <div className="gallery-content-items">
            <div className="gallery-text">
              <h2>{text}</h2>
            </div>
            <div className="gallery-images">
              <div className="gallery-row1">
                <div className="row1-img1">
                  <GalleryCard image={image1} />
                </div>
                <div className="row1-img2">
                  <GalleryCard image={image2} />
                </div>
                <div className="row1-img3">
                  <GalleryCard image={image3} />
                </div>
              </div>

              <div className="gallery-row2">
                <div className="row2-img1">
                  <GalleryCard image={image4} />
                </div>
                <div className="row2-img2">
                  <GalleryCard image={image5} />
                </div>
                <div className="row2-img3">
                  <GalleryCard image={image6} />
                </div>
              </div>
            </div>
            <div className="galleryBtn">
              <SampleBtn variant="contained">Sample Button</SampleBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
