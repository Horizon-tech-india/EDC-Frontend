import React from "react";
import parul1 from "../assets/parul1.jpg";
import '../styles/banner.scss'

const BannerImg = () => {
  return (
    <div className="image-wrapper">
        <img src={parul1} />
    </div>
  );
};

export default BannerImg;
