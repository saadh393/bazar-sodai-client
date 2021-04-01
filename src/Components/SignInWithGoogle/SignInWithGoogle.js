/*  
💥 Title : SignInWithGoogle
📃 Description : This will handle Google Signin Authentication
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import "./SignInWithGoogle.css";
import { handleGoogleSignIn } from "./handleSignIn";
import googleIcon from "../../Images/google.png";
import { useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import { useHistory, useLocation } from "react-router";

const SignInWithGoogle = () => {
  const [user, setUser] = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSignin = () => {
    handleGoogleSignIn()
      .then(({ user: u }) => {
        const userDataObj = {
          name: u.displayName,
          email: u.email,
          photo: u.photoURL,
        };
        setUser(userDataObj);
        axios.post("https://apple-pie-18190.herokuapp.com/addUser", userDataObj).then((res) => console.log(res));
        history.replace(from);
      })
      .catch((exception) => console.log(exception));
  };

  return (
    <>
      <div className="googleBtn" onClick={handleSignin}>
        <img src={googleIcon} />
        <p>Continue with Google</p>
      </div>
    </>
  );
};

export default SignInWithGoogle;
