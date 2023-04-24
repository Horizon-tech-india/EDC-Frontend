import React from 'react'
import Header from '../components/common/Header'
import Navigation from '../components/Layout/Navbar'

import Footer from '../components/Layout/Footer'
import DashboardComponent from '../components/common/DashboardComponent'

const App = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className="bg-white relative">
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Header props={'Hi, XYZ Company Name'} />
      <DashboardComponent />
      <Footer />
    </div>
  )
}

export default App
