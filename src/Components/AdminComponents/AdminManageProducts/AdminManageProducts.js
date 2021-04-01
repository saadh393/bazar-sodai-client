/*  
💥 Title : AdminManageProducts
📃 Description : This Page will show All the Products Available
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Table } from "react-bootstrap";
import TableHead from "../../TableHead/TableHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://apple-pie-18190.herokuapp.com/products").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  const deleteItem = (id) => {
    axios.delete("https://apple-pie-18190.herokuapp.com/productDelete/" + id).then(({ data }) => {
      if (data) {
        const restOftheData = products.filter((pd) => pd._id !== id);
        setProducts(restOftheData);
      }
    });
  };

  return (
    <>
      <Table className="table-striped table-hover">
        <TableHead columns={["ProductName", "Weight", "Price", "Action"]} />
        <tbody>
          {products.length &&
            products.map((pd) => {
              return (
                <tr>
                  <td>{pd.productName}</td>
                  <td>{pd.productQuantity}</td>
                  <td>{pd.productQuantity}</td>
                  <td style={{ cursor: "pointer" }} onClick={() => deleteItem(pd._id)}>
                    <FontAwesomeIcon icon={faTrash} color="#f44336" className="mr-2" />
                    Delete
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default AdminManageProducts;
