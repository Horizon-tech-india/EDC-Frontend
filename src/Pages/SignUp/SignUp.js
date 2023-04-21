import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.scss";
import SignUpStep1 from "./SignUpStep1";
import SignUpStep2 from "./SignUpStep2";
import SignUpStep3 from "./SignUpStep3";
import left from "../../assets/left.svg";

const SignUp = ({ step }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="wrapper">
      <div className="banner">
        <h1 className="banner__text banner__text--1">Welcome to</h1>
        <h1 className="banner__text banner__text--2">PU EDC</h1>
      </div>
      <div className="login__container signup__container">
        <nav className="signup__nav">
          <div className="signup__nav-link">
            <span>
              <img src={left} alt="" />
            </span>
            <Link to={step === 1 ? "/login" : "/signup/1"}>Back</Link>
          </div>
          <div className="signup__nav-current">
            <p className="signup__nav-current--1">Step {step} of 2</p>
            <p className="signup__nav-current--2">Signup</p>
          </div>
        </nav>
        {step === 1 ? (
          <SignUpStep1 setEmail={setEmail} />
        ) : (
          <SignUpStep3 email={email} />
        )}
      </div>
    </div>
  );
};

export default SignUp;
