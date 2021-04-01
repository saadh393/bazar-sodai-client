/*  
💥 Title : SingleProductCard
📃 Description : Layout of Each Product Card
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Card } from "react-bootstrap";
import messageImage from "../../Images/message.svg";
import bag from "../../Images/bag.svg";
import "./SingleProductCard.css";
import { Link } from "react-router-dom";

const SingleProductCard = ({ product }) => {
  const { productImage, productName, productPrice, productQuantity, _id } = product;
  return (
    <>
      <Card className="singleProductCard">
        <img src={productImage} className="productImage" alt={productName} />
        <div className="productInfo">
          <h4>{productName}</h4>
          <p>
            <strong>Quantity : </strong> {productQuantity}
          </p>
          <div className="cardIcons">
            <div className="cardLeft">
              <img src={messageImage} />
              <img src={bag} />
            </div>
            <Link to={`/checkout/${_id}`}>
              <div className="cardRight">
                <strong>Buy Now</strong>
              </div>
            </Link>
          </div>
          <span className="priceTag">{productPrice}</span>
        </div>
      </Card>
    </>
  );
};

export default SingleProductCard;
