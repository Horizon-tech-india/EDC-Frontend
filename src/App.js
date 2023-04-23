import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import ApplicationStatus from "./Pages/ApplicationStatus/ApplicationStatus";
import { Provider } from "react-redux";
import store from "./Pages/ApplicationStatus/components/store";


const App = () => {
  return (
    <div className="App">
      < Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup/1" element={<SignUp step={1} />} />
          <Route exact path="/signup/2" element={<SignUp step={2} />} />
          <Route exact path="/signup/3" element={<SignUp step={3} />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/application" element={<ApplicationStatus />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
