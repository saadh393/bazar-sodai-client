/*  
💥 Title : AdminSidebar
📃 Description : Left Sidebar Of Admin Panel
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import logo from "../../../Images/logo.png";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <div className="branding">
            <img src={logo} alt="Bazar Sodai" />
            <h2>Bazar Shodai</h2>
          </div>
        </Link>
        <ul>
          <Link to="/admin/manage"> Manage Products</Link>
          <Link to="/admin/addProduct"> Add Products</Link>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
