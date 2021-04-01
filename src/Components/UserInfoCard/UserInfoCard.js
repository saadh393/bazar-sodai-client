/*  
💥 Title : UserInfoCard
📃 Description : User Informations
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import dummyImage from "../../Images/demoImage.jpg";
import "./UserInfoCard.css";
import { useContext } from "react";
import { UserContext } from "../../App";

const UserInfoCard = () => {
  const [user, setUser] = useContext(UserContext);
  const { name, email, photo } = user;

  return (
    <>
      <h3>Customer Info</h3>
      <hr />

      <div class="profile">
        <img src={photo} />
        <h4>{name}</h4>
        <p>
          <strong>{email}</strong>
        </p>
        <p>01751246512</p>
      </div>
      <hr />
      <h5>
        <b>Shipping Address</b>
      </h5>
      <p>
        39, Random Address,
        <br /> Random Country, UK
      </p>
    </>
  );
};

export default UserInfoCard;
