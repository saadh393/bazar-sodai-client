/*  
💥 Title : Order Page
📃 Description : This page will show all the products Ordered by an user.
✍ Author : Saad Hasan
⌚ Date : 30/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import OrderedProductOverview from "../Components/OrderedProductOverview/OrderedProductOverview";
import UserInfoCard from "../Components/UserInfoCard/UserInfoCard";

const OrderPage = () => {
  let history = useHistory();
  let msg = history.location.search;
  const [show, setShow] = useState(msg);

  setTimeout(() => {
    setShow(false);
  }, 3000);
  return (
    <>
      <Row className="my-5">
        <Col md={8}>
          {show && <Alert />}
          <OrderedProductOverview />
        </Col>
        <Col md={4}>
          <Card className="p-4">
            <UserInfoCard />
          </Card>
        </Col>
      </Row>
    </>
  );
};

const Alert = ({ action }) => {
  return (
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <div>
        <h4 class="alert-heading">Well done!</h4>
        <p>Your Order Place Successfully 🎉</p>
      </div>
    </div>
  );
};

export default OrderPage;
