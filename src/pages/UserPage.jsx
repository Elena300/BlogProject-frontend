
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import { Link, Outlet } from 'react-router-dom'


export default function UserPage() {
	
	return (
    <>
      <div className="h-40 bg-techno-black">
        <Navbar />
      </div>

      <div className="w-full min-h-80 bg-techno-black px-16 pt-10 flex ">
        <div id="sidebar" className=" w-1/6">
          <nav className=" border-r-2 border-fluo-green flex flex-col h-full items-end pr-4">
            <ul>
              <li className="pt-16 cursor-pointer text-sm text-fluo-green uppercase font-space-grotesk-light hover:decoration-solid hover:underline text-right">
                <Link to="newpost">Create new post</Link>
              </li>
              <li className="pt-16 cursor-pointer text-sm text-fluo-green uppercase font-space-grotesk-light hover:decoration-solid hover:underline text-right">
                <Link to="all/14">Your posts</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
