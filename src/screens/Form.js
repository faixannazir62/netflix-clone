import React from "react";
import "./FirstScreen.css";
import { useFormik } from "formik";
import { signupEmail } from "./FormValidation";
import { useNavigate } from "react-router-dom";
import SignUpMainScreen from "../innerComponents/SignUpMainScreen";
function Form({ setUsername }) {
  const Navigate = useNavigate();
  const initialValues = {
    email: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupEmail,
      onSubmit: (values) => {
        setUsername(values.email);
        Navigate("/signup");
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
      {/*sendig data to child */}
    </form>
  );
}

export default Form;
