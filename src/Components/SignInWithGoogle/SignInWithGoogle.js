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

const SignInWithGoogle = () => {
  const [user, setUser] = useContext(UserContext);

  const handleSignin = () => {
    handleGoogleSignIn()
      .then(({ user: u }) => {
        // setUser(res);
        const userDataObj = {
          name: u.displayName,
          email: u.email,
          photo: u.photoURL,
        };
        setUser(userDataObj);
        axios.post("http://localhost:4000/addUser", userDataObj).then((res) => console.log(res));
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
