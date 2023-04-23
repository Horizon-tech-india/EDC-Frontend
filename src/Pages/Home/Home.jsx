import React from "react";
import Header from "./components/HeaderImg";
import Navigation from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = ({ loggedIn, setLoggedIn }) => {

  return (
    <>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <Header />

      <Section1 />

      <Section2 />

      <Gallery />

      <Footer />
    </>
  );
};

export default App;
