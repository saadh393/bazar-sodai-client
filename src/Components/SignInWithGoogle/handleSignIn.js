import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-F2jvTI2AmbHEg_J-v0TZK9_6hq9us_o",
  authDomain: "programming-hero-assignments.firebaseapp.com",
  projectId: "programming-hero-assignments",
  storageBucket: "programming-hero-assignments.appspot.com",
  messagingSenderId: "40142514243",
  appId: "1:40142514243:web:5d8c1f8ef5e452d9d94cf6",
};

firebase.initializeApp(firebaseConfig);

export const handleGoogleSignIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
