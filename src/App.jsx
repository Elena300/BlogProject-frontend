import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Overlay from "./components/Overlay";
import Bloggers from "./pages/Bloggers";



function App() {
  //axios.defaults.baseURL = "http://localhost:3000";
  //axios.defaults.withCredentials = true;
      
  return (
    <>
      <Overlay />
        <div className=" h-40 bg-techno-black">
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<Bloggers />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
