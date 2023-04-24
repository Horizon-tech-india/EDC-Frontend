import React from 'react'
import Header from '../components/common/Header'
import Navigation from '../components/Layout/Navbar'
import DocumentComponent from '../components/common/DocumentComponent'
import Footer from '../components/Layout/Footer'

const App = () => {
  return (
    <div className="bg-white relative">
      <Navigation />
      <Header props={'Upload the documents'} />
      <DocumentComponent />
      <Footer />
    </div>
  )
}

export default App
