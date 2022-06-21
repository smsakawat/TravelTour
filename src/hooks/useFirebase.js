import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize toastify
toast.configure();
//initializing firebase
initializeAuthentication();
const useFirebase = () => {
  // autentication states
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // cheking admin locally
  const checkAdmin = (user) => {
    console.log(user.email);
    if (user.email === "admin@gmail.com") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };

  // sign in with google
  const signinWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // sign up with email
  const signUpUsingEmailAndPass = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //    sign in with email and password
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // save user details for after register
  const saveUser = (email, displayName) => {
    const user = { email: email, displayName: displayName };
    console.log(user);
    axios
      .post("http://localhost:3000/users", user)
      .then((res) => console.log(res.data))
      .catch((err) => alert("error in db" + err.response));
  };
  // setting up an observer
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        checkAdmin(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  // cheking if the user is admin or not
  useEffect(() => {
    axios
      .get(`https://localhost:3000/users/${user.email}`)
      .then((res) => setAdmin(res.data.admin));
  }, [user.email]);

  // show message on logout
  const notify = () => {
    toast.info("Logout succesffull!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // logout authentication
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        notify();
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    user,
    setUser,
    signinWithGoogle,
    signUpUsingEmailAndPass,
    signInWithEmail,
    logOut,
    isLoading,
    setIsLoading,
    admin,
    saveUser,
    setAdmin,
  };
};
export default useFirebase;
