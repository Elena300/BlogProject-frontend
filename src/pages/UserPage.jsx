
import { Link, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function UserArea() {
  return (
    <>
      <div className="border bg-techno-black w-full">
        <div className="logo-container">
          <Link to="/">
            <div className="logo">IoT Blog</div>
          </Link>
        </div>
      </div>

      <div className="flex">
        <div id="sidebar" className=" border-2 border-red-900">
          <nav>
            <ul>
              <li>
                <Link to="newpost">Create new post</Link>
              </li>
              <li>
                <Link to="all/14">Create new post</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-2 border-blue-950 bg-blue-500">
          <Outlet />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
