import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "../Login/login.scss";
import "./signup.scss";
import { forgotPasswordSchemaStep1 } from "./formSchema";
import mail from "../../assets/mail.svg";

const initialValues = {
  email: "",
};

const SignUpStep1 = () => {
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
    validationSchema: forgotPasswordSchemaStep1,
    onSubmit: (values) => {
      //POST REQUEST
      navigate("/forgot-password/2");
    },
  });

  return (
    <>
      <div className="login__head">
        <h2>Forgot Password</h2>
        <p>
          Enter the email of your account and we will send the email to reset
          your password
        </p>
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
          <button className="submit-btn" type="submit">
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpStep1;
