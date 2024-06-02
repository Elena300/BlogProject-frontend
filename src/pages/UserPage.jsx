
import { Link } from 'react-router-dom'

export default function UserArea() {
  return (
    <>
      <div className="border bg-techno-black">
      </div>
        <div className="logo-container">
          <Link to="/">
            <div className="logo">
              IoT Blog
            </div>
          </Link>
        </div>
        <div>side menu</div>
        <div>UserArea</div>
   
      
    </>
  );
}
