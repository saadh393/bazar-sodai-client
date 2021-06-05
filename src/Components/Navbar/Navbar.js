/*  
💥 Title : Navbar
📃 Description : Brand Name and Menus will be shown here
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import menuIcon from "../../Images/menuicon.png";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const [showMenu, setMenuStatus] = useState(false);
  return (
    <>
      <nav>
        <div className="brand">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <img className="hamburger" alt="" src={menuIcon} onClick={() => setMenuStatus(!showMenu)} />
        <ol className="menuList">
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/admin/addProduct">Admin</Link>
          {user.name ? <Profile name={user.name} photo={user.photo} /> : <LoginBtn />}
        </ol>

        <ol className="responsiveNavMenu" style={{ display: showMenu ? "" : "none" }}>
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/admin/addProduct">Admin</Link>
          {user.name ? <Profile name={user.name} photo={user.photo} /> : <LoginBtn />}
        </ol>
      </nav>
    </>
  );
};

const LoginBtn = () => {
  return (
    <>
      <Link to="/login" className="active">
        Login
      </Link>
    </>
  );
};

const Profile = ({ photo, name }) => {
  return (
    <>
      <div className="profileCard">
        <img src={photo} className="profilePhoto" />
        <a>
          <strong>{name}</strong>
        </a>
      </div>
    </>
  );
};

export default Navbar;
