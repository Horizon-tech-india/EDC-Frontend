import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./login.scss";
import loginSchema from "./formSchema";
import lock from "../../assets/lock.svg";
import mail from "../../assets/mail.svg";
import eyeOff from "../../assets/eye-off.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import linkedin from "../../assets/linkedin.svg";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const Login = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      //POST REQUEST
      axios
        .post("https://localhost:9000/users/login", values)
        .then((response) => {
          navigate("/home");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <div className="wrapper">
      <div className="banner">
        <h1 className="banner__text banner__text--1">Welcome to</h1>
        <h1 className="banner__text banner__text--2">PU EDC</h1>
      </div>
      <div className="login__container">
        <div className="signup-link">
          <p>Don't have an account?</p>
          <Link to="/signup/1">Signup</Link>
        </div>
        <div className="login__head">
          <h2>Welcome</h2>
          <p>Login to continue</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="email">Email</label>
            <div className="input-block__input">
              <span>
                <img src={mail} alt="" />
              </span>
              <input
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
              />
            </div>
            {errors.email && touched.email ? (
              <p className="input-block__error">{errors.email}</p>
            ) : null}
          </div>
          <div className="input-block">
            <label htmlFor="password">Password</label>
            <div className="input-block__input">
              <span>
                <img src={lock} alt="" />
              </span>
              <input
                type={passwordHidden ? "password" : "text"}
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your password"
              />
              <span onClick={() => setPasswordHidden(!passwordHidden)}>
                <img src={eyeOff} alt="" />
              </span>
            </div>
            {errors.password && touched.password ? (
              <p className="input-block__error">{errors.password}</p>
            ) : null}
          </div>
          <div className="input-block login__remember">
            <div>
              <input
                type="checkbox"
                id="rememberMe"
                name="remember_Me"
                value={values.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <Link to="/forgot-password/1">Forgot Password?</Link>
          </div>
          <div className="input-block">
            <button className="submit-btn" type="submit">
              Login
            </button>
          </div>
        </form>
        <section className="other-login-options">
          <p>or continue with</p>
          <ul className="other-login-options__list">
            <li className="other-login-options__item">
              <span>
                <img src={facebook} alt="" />
              </span>
            </li>
            <li className="other-login-options__item">
              <span>
                <img src={google} alt="" />
              </span>
            </li>
            <li className="other-login-options__item">
              <span>
                <img src={linkedin} alt="" />
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Login;
