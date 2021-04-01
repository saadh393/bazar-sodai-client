/*  
💥 Title : AdminMainContent
📃 Description : Main Contents of Admin Page
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import AdminAddProduct from "../AdminAddProduct/AdminAddProduct";
import { Route, Switch, useHistory } from "react-router-dom";
import AdminManageProducts from "../AdminManageProducts/AdminManageProducts";

const AdminMainContent = () => {
  const history = useHistory();
  console.log(history);
  return (
    <>
      <div className="mainContents">
        <div className="mainContentHeader">
          <Button onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} />
            {" Back "}
          </Button>
          <h2> Page Name </h2>
        </div>
        <div className="contents">
          <Switch>
            <Route path="/admin/addProduct">
              <AdminAddProduct />
            </Route>
            <Route path="/admin/manage">
              <AdminManageProducts />
            </Route>
            <Route path="/admin/users">
              <AdminManageProducts />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default AdminMainContent;
