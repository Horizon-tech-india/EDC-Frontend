import React from 'react'
import '../src/styles/App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp/SignUp'
import Home from './Pages/Home'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import ApplicationStatus from './Pages/ApplicationStatus'
import Dashboard from './Pages/Dashboard'
import Document from './Pages/Document'
import Report from './Pages/Report'
import { Provider } from 'react-redux'
import store from "./components/slices/store"
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      < Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route exact path="/signup/1" element={<SignUp step={1} />} />
          <Route exact path="/signup/2" element={<SignUp step={2} />} />
          <Route
            exact
            path="/"
            element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route
            exact
            path="/application"
            element={
              <ApplicationStatus
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            }
          />
          <Route
            exact
            path="/document"
            element={<Document loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route
            exact
            path="/report"
            element={<Report loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
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
      </Provider>
    </div>
  )
}

export default App
