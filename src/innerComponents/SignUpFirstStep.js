import React from "react";
import "./SignUp.css";

function SignUpFirstStep({ setNextStep }) {
  const handleClick = () => {
    console.log("firstClicked");
    setNextStep(false);
  };
  return (
    <div className="signup-main-c">
      <div className="inner-signUp-C">
        <div className="signUp-content">
          <div className="topIcons"></div>
          <div className="sigupTitle">
            <span>STEP 1 OF 2</span>
            <h1>
              Finish setting up your
              <br /> account
            </h1>
          </div>
          <div className="signUpDescr">
            <p>
              Netflix is personalised for you. Create a password to watch on any
              device at any time.
            </p>
          </div>
          <button className="submitBtn" type="submit" onClick={handleClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpFirstStep;
