import React from 'react'
import Header from '../components/common/Header'
import Navigation from '../components/Layout/Navbar'
import Section1 from '../components/home/Section1'
import Section2 from '../components/home/Section2'
import Gallery from '../components/home/Gallery'
import Footer from '../components/Layout/Footer'

const App = () => {
  return (
    <div className="bg-white relative">
      <Navigation />
      <Header props={''} />
      <Section1 />
      <Section2 />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
