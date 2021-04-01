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

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((pd) => setProducts(pd.data));
  }, []);

  return (
    <>
      <div className="productGrid my-5">
        {products.length && products.map((pd) => <SingleProductCard product={pd} key={pd._id} />)}
      </div>
    </>
  );
};

export default HomePage;
