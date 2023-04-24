import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Documents from "./Pages/DocumentsPage/Documents";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup/1" element={<SignUp step={1} />} />
          <Route exact path="/signup/2" element={<SignUp step={2} />} />
          <Route exact path="/home" element={<Home />} />
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
          <Route exact path="/documents" element={<Documents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
