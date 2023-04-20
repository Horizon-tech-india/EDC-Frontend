import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchemaStep2 } from "./formSchema";
import "../Login/login.scss";
import "./signup.scss";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  password: "",
};

const SignUpStep2 = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchemaStep2,
    onSubmit: (values) => {
      //POST REQUEST
      navigate("/signup/3");
    },
  });
  const navigate = useNavigate();

  return (
    <>
      <div className="login__head">
        <h2>Register your account</h2>
        <p>Fill the details below to submit register account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="startup_name">Startup Name</label>
          <div className="input-block__input">
            <input
              type="text"
              id="startup_name"
              name="startup_name"
              value={values.startup_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Startup/Company Name"
            />
          </div>
          {errors.startup_name && touched.startup_name ? (
            <p className="input-block__error">{errors.startup_name}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="applying_to">Applying to</label>
          <select
            name="applying_to"
            id="applying_to"
            className="input-block_input--dropdown"
          >
            <option value="" disabled defaultValue hidden>
              VSS, RSS, AHSS, or Surat Branch
            </option>
            <option value="VSS">VSS</option>
            <option value="RSS">RSS</option>
            <option value="AHSS">AHSS</option>
            <option value="Surat Branch">Surat Branch</option>
          </select>

          {errors.applying_to && touched.applying_to ? (
            <p className="input-block__error">{errors.applying_to}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="applying_to">I'm A</label>
          <select
            name="profession"
            id="profession"
            className="input-block_input--dropdown"
          >
            <option value="" disabled defaultValue hidden>
              PU Student or Working Professional
            </option>
            <option value="student">PU Student</option>
            <option value="professional">Working Professional</option>
          </select>

          {errors.profession && touched.profession ? (
            <p className="input-block__error">{errors.profession}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="website_link">
            Company Website link if available
          </label>
          <div className="input-block__input">
            <input
              type="text"
              id="website_link"
              name="website_link"
              value={values.website_link}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="www.edc.com"
            />
          </div>
          {errors.website_link && touched.website_link ? (
            <p className="input-block__error">{errors.website_link}</p>
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

export default SignUpStep2;
