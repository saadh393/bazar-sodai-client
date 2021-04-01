/*  
💥 Title : LoginPage
📃 Description : If User Wants to Place order or Admin wants to Add New product He must have to logged in though this page
✍ Author : Saad Hasan
⌚ Date : 30/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Card } from "react-bootstrap";
import SignInWithGoogle from "../Components/SignInWithGoogle/SignInWithGoogle";
import loginImage from "../Images/login.svg";

const LoginPage = () => {
  return (
    <>
      <Card className="align-items-center p-5">
        <h1 className="font-weight-bold"> Login Required </h1>
        <img src={loginImage} className="w-25 my-5" />
        <SignInWithGoogle />
      </Card>
    </>
  );
};

export default LoginPage;
