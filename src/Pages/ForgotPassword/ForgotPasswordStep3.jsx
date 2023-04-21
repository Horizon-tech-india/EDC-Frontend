import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { forgotPasswordSchemaStep3 } from "./formSchema";
import "../Login/login.scss";
import "./signup.scss";
import lock from "../../assets/lock.svg";
import eyeOff from "../../assets/eye-off.svg";

const initialValues = {
  new_password: "",
  confirm_password: "",
};

const SignUpStep3 = () => {
  const [passwordHidden1, setPasswordHidden1] = useState(true);
  const [passwordHidden2, setPasswordHidden2] = useState(true);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchemaStep3,
    onSubmit: (values) => {
      //POST REQUEST
      navigate("/login");
    },
  });
  const navigate = useNavigate();

  return (
    <>
      <div className="login__head">
        <h2>Create New Password</h2>
        <p>Enter the new password for your account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="new_password">New Password</label>
          <div className="input-block__input">
            <span>
              <img src={lock} alt="" />
            </span>
            <input
              type={passwordHidden1 ? "password" : "text"}
              id="new_password"
              name="new_password"
              value={values.new_password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="New Password"
            />
            <span onClick={() => setPasswordHidden1(!passwordHidden1)}>
              <img src={eyeOff} alt="" />
            </span>
          </div>
          {errors.new_password && touched.new_password ? (
            <p className="input-block__error">{errors.new_password}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="confirm_password">Confirm Password</label>
          <div className="input-block__input">
            <span>
              <img src={lock} alt="" />
            </span>
            <input
              type={passwordHidden2 ? "password" : "text"}
              id="confirm_password"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm Password"
            />
            <span onClick={() => setPasswordHidden2(!passwordHidden2)}>
              <img src={eyeOff} alt="" />
            </span>
          </div>
          {errors.confirm_password && touched.confirm_password ? (
            <p className="input-block__error">{errors.confirm_password}</p>
          ) : null}
        </div>
        <div className="input-block">
          <button className="submit-btn" type="submit">
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpStep3;
