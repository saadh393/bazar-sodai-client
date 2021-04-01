/*  
💥 Title : CheckoutPage
📃 Description : This Page will show the Checkout Details
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Card, Table } from "react-bootstrap";
import { Redirect, useHistory, useParams } from "react-router";
import { UserContext } from "../App";
import TableHead from "../Components/TableHead/TableHead";
import TableRow from "../Components/TableRow/TableRow";

const CheckoutPage = () => {
  const { _id } = useParams();
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const [checkout, setCheckout] = useState({
    productName: "Loading...",
    productQuantity: "Loading...",
    productPrice: "Loading...",
  });

  useEffect(() => {
    axios.get("https://apple-pie-18190.herokuapp.com/product/" + _id).then(({ data }) => setCheckout(data));
  }, []);

  const { productName, productPrice, productQuantity } = checkout;

  const handleOrder = () => {
    if (user.name) {
      const email = user.email;
      const datatoStore = { email, ...checkout };
      axios.post("https://apple-pie-18190.herokuapp.com/placeOrder", datatoStore).then((response) => {
        console.log("Place Order", response);
        if (response) {
          history.push("/orders?msg=true");
        }
      });
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      <Card className="my-5 p-5">
        <h3 className="mb-3"> Checkout </h3>
        <Table className="table-striped table-hover">
          <TableHead columns={["Description", "Quantity", "Price"]} />
          <tbody>
            <TableRow cell={[productName, productQuantity, productPrice]} />
            <TableRow
              cell={["Total", " ", productPrice]}
              styles={{ backgroundColor: "#2c263a", color: "#fff", fontWeight: "800" }}
            />
          </tbody>
        </Table>
        <button
          className="btn btn-outline-success"
          style={{ alignSelf: "flex-end", width: "fit-content" }}
          onClick={handleOrder}
        >
          Checkout
        </button>
      </Card>
    </>
  );
};

export default CheckoutPage;
