import React from "react";
import parul3 from "../assets/parul3.png";
import '../styles/banner.scss'

const BannerImg = () => {
  return (
    <div className="image-wrapper">
        <img src={parul3} />
    </div>
  );
};

export default BannerImg;
