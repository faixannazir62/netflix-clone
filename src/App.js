import React, { useEffect, useState } from "react";
import "./App.css";
import FirstScreen from "./screens/FirstScreen";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingIn from "./screens/SingIn";
import SignUpMainScreen from "./innerComponents/SignUpMainScreen";

function App() {
  const [user, setUser] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    authToken ? setUser(true) : setUser(false);
  }, []);
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<FirstScreen setUsername={setUsername} />} />
          <Route
            path="/homescreen"
            element={<HomeScreen user={user} setUser={setUser} />}
          />
          <Route path="/signin" element={<SingIn setUser={setUser} />} />
          <Route
            path="/signup"
            element={<SignUpMainScreen username={username} />}
          />
          <Route path="*" element={<FirstScreen />} />
        </Routes>
      </Router>
      <div className="copyright">
        <h1>
          Made with <span className="material-symbols-outlined heart">favorite</span> by
          Faizan Nazir
        </h1>
      </div>
    </React.Fragment>
  );
}

export default App;
