import React from 'react'
import Header from '../components/common/Header'
import Navigation from '../components/Layout/Navbar'

import Footer from '../components/Layout/Footer'

const App = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className="bg-white relative">
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Header props={'Upload the documents'} />

      <Footer />
    </div>
  )
}

export default App
