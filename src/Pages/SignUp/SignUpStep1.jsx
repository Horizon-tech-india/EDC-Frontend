import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "../Login/login.scss";
import "./signup.scss";
import { signupSchemaStep1 } from "./formSchema";
import lock from "../../assets/lock.svg";
import mail from "../../assets/mail.svg";
import eyeOff from "../../assets/eye-off.svg";
import phone from "../../assets/phone.svg";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  password: "",
};

const SignUpStep1 = () => {
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
    initialValues: initialValues,
    validationSchema: signupSchemaStep1,
    onSubmit: (values) => {
      //POST REQUEST
      navigate("/signup/2");
    },
  });

  return (
    <>
      <div className="login__head">
        <h2>Register your account</h2>
        <p>Fill the details below to submit register account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <div className="input-block--grid">
            <div>
              <label htmlFor="first_name">First Name</label>
              <div className="input-block__input">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Firstname"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last_name">Last Name</label>
              <div className="input-block__input">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Lastname"
                />
              </div>
            </div>
          </div>
          {(errors.first_name || errors.last_name) &&
          (touched.first_name || touched.last_name) ? (
            <p className="input-block__error">
              {errors.first_name ? errors.first_name : errors.last_name}
            </p>
          ) : null}
        </div>
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
          <label htmlFor="phone_number">Phone Number</label>
          <div className="input-block__input">
            <span>
              <img src={phone} alt="" />
            </span>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={values.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="(+123) 9876543210"
            />
          </div>
          {errors.phone_number && touched.phone_number ? (
            <p className="input-block__error">{errors.phone_number}</p>
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
        <div className="input-block__terms">
          By signing in, you're agreeing to our{" "}
          <span>
            <Link>Terms & Condition</Link>
          </span>
          and
          <span>
            <Link>Privacy Policy</Link>*
          </span>
        </div>
        <div className="input-block">
          <button className="submit-btn" type="submit">
            Continue
          </button>
        </div>
      </form>
      <div className="login-link">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default SignUpStep1;
