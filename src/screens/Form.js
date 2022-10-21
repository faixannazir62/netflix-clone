import React from "react";
import "./FirstScreen.css";
import { useFormik } from "formik";
import { signup } from "./FormValidation";
function Form() {
  const initialValues = {
    email: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signup,
      onSubmit: (values) => {
        console.log(values.email);
      },
    });
  return (
    <form className="sg-form" onSubmit={handleSubmit}>
      <h3 className="form-sub-title">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="iField-btn">
        <div className="input-div">
          <input
            type="email"
            name="email"
            className="sgInputField"
            placeholder="Email address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="input-error">
            {errors.email && touched.email ? (
              <p className="error-msg">{errors.email}</p>
            ) : null}
          </div>
        </div>
        <div className="signup-submit-btn">
          <button className="btn" type="submit">
            <span className="btn-text">Get Started</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
