/*  
💥 Title : AdminPage
📃 Description : This page will manage the products including add new product and remove old products
✍ Author : Saad Hasan
⌚ Date : 30/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import AdminSidebar from "../Components/AdminComponents/AdminSidebar/AdminSidebar";
import AdminMainContent from "../Components/AdminComponents/AdminMainContent/AdminMainContent";

const AdminPage = () => {
  return (
    <>
      <div className="adminPage">
        <AdminSidebar />
        <AdminMainContent />
      </div>
    </>
  );
};

export default AdminPage;
