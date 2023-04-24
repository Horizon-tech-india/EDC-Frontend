import React from 'react'
import '../src/styles/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp/SignUp'
import Home from './Pages/Home'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import ApplicationStatus from './Pages/ApplicationStatus'
import Dashboard from './Pages/Dashboard'
import Document from './Pages/Document'
import Report from './Pages/Report'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup/1" element={<SignUp step={1} />} />
          <Route exact path="/signup/2" element={<SignUp step={2} />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/application" element={<ApplicationStatus />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/document" element={<Document />} />
          <Route exact path="/report" element={<Report />} />
          <Route
            exact
            path="/forgot-password/1"
            element={<ForgotPassword step={1} />}
          />
          <Route
            exact
            path="/forgot-password/2"
            element={<ForgotPassword step={2} />}
          />
          <Route
            exact
            path="/forgot-password/3"
            element={<ForgotPassword step={3} />}
          />
          {/* <Route exact path="/" element={<Navigate to="/login" replace />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
