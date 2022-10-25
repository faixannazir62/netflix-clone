import { useFormik } from "formik";
import { signInForm } from "../screens/FormValidation";
import { app } from "../screens/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./SignUp.css";
import { useState } from "react";
function SignUpSecStep({ username }) {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const Navigate = useNavigate();
  const authentication = getAuth(app);
  const initialValues = {
    username: username,
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInForm,
      onSubmit: (values) => {
        createUserWithEmailAndPassword(
          authentication,
          values.username,
          values.password
        )
          .then((response) => {
            setError(false);
            console.log(response.user);
            sessionStorage.setItem(
              "Auth Token",
              response._tokenResponse.refreshToken
            );
            Navigate("/homescreen");
          })
          .catch((error) => {
            setError(true);
            setErrorMsg("Email Id is already registered.");
          });
      },
    });
  return (
    <div className="signup-main-c">
      <div className="inner-signUp-CSec">
        <div className="signUp-content">
          {error ? (
            <p className="signInErrorMsg">
              <span class="material-symbols-outlined danger">warning</span>
              {errorMsg}
            </p>
          ) : null}
          <div className="sigupTitle sec">
            <span>STEP 1 OF 2</span>
            <h1>Create a password to start your membership</h1>
          </div>
          <div className="signUpDescrsec">
            <p>Just a few more steps and you're done!</p>
            <p>We hate paperwork, too.</p>
          </div>

          <form className="signUpFrm" onSubmit={handleSubmit}>
            <input
              name="username"
              type="text"
              placeholder="Email or Phone Number"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="input-error">
              {errors.username && touched.username ? (
                <p className="error-msg">{errors.username}</p>
              ) : null}
            </div>
            <input
              type="password"
              name="password"
              placeholder="Add Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="input-error">
              {errors.password && touched.password ? (
                <p className="error-msg">{errors.password}</p>
              ) : null}
            </div>
            <button className="submitBtn" type="submit">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpSecStep;
