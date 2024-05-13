import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostItem from "./pages/PostItem";
import About from "./pages/About";
import Overlay from "./components/Overlay";
//import axios from "axios";

function App() {
  //axios.defaults.baseURL = "http://localhost:3000";
  //axios.defaults.withCredentials = true;
      
  return (
    <>
        <Overlay />
      <div className=" max-w-full flex flex-col">
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<PostItem />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
