/*  
💥 Title : OrderedProductOverview
📃 Description : This Section will show the Ordered Product Items on The Order Page
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../../App";
import "./OrderedProductOverview.css";

const OrderedProductOverview = () => {
  const [user, setUser] = useContext(UserContext);
  const [orderedProduct, setOrderedProduct] = useState([]);
  useEffect(() => {
    axios.get("https://apple-pie-18190.herokuapp.com/orderedItems/" + user.email).then(({ data }) => {
      if (data.ordered?.length > 0) {
        setOrderedProduct(data.ordered);
      } else {
        setOrderedProduct([]);
      }
    });
  }, []);
  return (
    <Card className="p-5">
      <h3>Order Overview</h3>
      <hr />
      {orderedProduct.map((pd) => (
        <ProductItem product={pd} />
      ))}
    </Card>
  );
};

const ProductItem = ({ product }) => {
  const { productImage, productName, productPrice, productQuantity, timestamp } = product;
  return (
    <div className="orderedProduct">
      <img src={productImage} />
      <div className="orderedProductInfo">
        <h5>{productName}</h5>
        <p>Quantity {productQuantity}</p>
        <p> Orderd at : {timestamp}</p>
      </div>
      <div className="orderdPCalculation">
        <p>{productPrice}</p>
        <p> X </p>
        <p>1</p>
      </div>
      <p>{productPrice}</p>
    </div>
  );
};

export default OrderedProductOverview;
