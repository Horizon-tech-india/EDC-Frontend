import React from "react";
import Header from "../components/common/Header";
import Navigation from "../components/Layout/Navbar";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Gallery from "../components/home/Gallery";
import Footer from "../components/Layout/Footer";

const App = ({ loggedIn, setLoggedIn }) => {
  return (
    <div class="bg-white relative">
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Header props={""} />
      <Section1 />
      <Section2 />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
