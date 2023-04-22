import React from "react";
import BannerImg from "./components/BannerImg";
import Navigation from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div class="bg-white">
      <Navigation />
      <BannerImg />
      <Section1 />
      <Section2 />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
