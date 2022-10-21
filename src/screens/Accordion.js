import React, { useState } from "react";
import "./Accordion.css";
function Accordion({ question, answer }) {
  const [isActive, setIsActive] = useState(false);
  return (
   
        <li className="acc-list-item">
          <button className="question" onClick={() => setIsActive(!isActive)}>
            {question}
            <span className="acc-icon">{isActive ? "-" : "+"}</span>
          </button>
          {isActive && <div className="ans">{answer}</div>}
        </li>
  );
}

export default Accordion;
