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
      <div className=" h-screen  w-full ">
        <AreaChartComponent />
      </div>
      <div className="min-h-screen w-full ">
        <PieChartComponent />
      </div>
      <Footer />
    </div>
  )
}

export default App
