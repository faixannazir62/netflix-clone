import React, { useState } from "react";
import SignUpFirstStep from "./SignUpFirstStep";
import SignUpSceStep from "./SignUpSecStep";
import "./SignUp.css";
import Nav from "../Nav";
function SignUpMainScreen({ username }) {
  console.log(username);
  const [nextStep, setNextStep] = useState(true);
  return (
    <div className="signUpMainC">
      <div className="navbar">
        <Nav signUpCN={"signUpNav"} />
      </div>
      {nextStep ? (
        <SignUpFirstStep setNextStep={setNextStep} />
      ) : (
          <SignUpSceStep username={ username} />
      )}
    </div>
  );
}

export default SignUpMainScreen;
