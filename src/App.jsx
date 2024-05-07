import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
//import axios from "axios";

function App() {
  //axios.defaults.baseURL = "http://localhost:3000";
  //axios.defaults.withCredentials = true;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
