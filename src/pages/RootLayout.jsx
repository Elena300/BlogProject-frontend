import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className=" h-40 bg-techno-black">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
