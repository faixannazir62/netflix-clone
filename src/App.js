import "./App.css";
import FirstScreen from "./screens/FirstScreen";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingIn from "./screens/SingIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="*" element={<FirstScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
