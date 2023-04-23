import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ApplicationStatus from "./Pages/ApplicationStatus/ApplicationStatus";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
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
            path="/home"
            element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route exact path="/application" element={<ApplicationStatus />} />
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
          <Route exact path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
