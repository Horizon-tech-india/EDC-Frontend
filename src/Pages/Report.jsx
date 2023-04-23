import React from 'react'
import Header from '../components/common/Header'
import Navigation from '../components/Layout/Navbar'

import Footer from '../components/Layout/Footer'
import PieChartComponent from '../components/charts/PieChartComponent'
import AreaChartComponent from '../components/charts/AreaChartComponent'

const App = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className="bg-white relative">
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Header props={'Financial Report'} />
      <AreaChartComponent />
      <PieChartComponent />
      <Footer />
    </div>
  )
}

export default App
