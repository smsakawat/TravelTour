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
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

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

  // setting up an observer
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

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
  };
};
export default useFirebase;
