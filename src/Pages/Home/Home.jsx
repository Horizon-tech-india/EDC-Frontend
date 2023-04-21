import React from 'react'
import BannerImg from './components/BannerImg';
import Navigation from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
  <>
    <Navigation />

    <BannerImg />

    <Section1 />

    <Section2 />

    <Gallery />

    <Footer />
  </>
  )
}

export default App;