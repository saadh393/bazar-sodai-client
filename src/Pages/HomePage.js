/*  
💥 Title : Home Page
📃 Description : This Page Will Show the Available Products
✍ Author : Saad Hasan
⌚ Date : 30/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useEffect, useState } from "react";
import SingleProductCard from "../Components/SingleProductCard/SingleProductCard";
import Searchbar from "../Components/Searchbar/Searchbar";
import { Spinner } from "react-bootstrap";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://apple-pie-18190.herokuapp.com/products").then((pd) => setProducts(pd.data));
  }, []);

  return (
    <>
      <Searchbar />
      <div className="productGrid my-5">
        {products.length ? (
          products.map((pd) => <SingleProductCard product={pd} key={pd._id} />)
        ) : (
          <div className="center">
            <Spinner animation="grow" size="sm" variant="warning" />
            <Spinner animation="grow" variant="danger" />
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
