import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  // setting loader to handle auto redirect in reload
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  // SignIn in with google
  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        history.push("/home");
        setIsLoading(false);
        alert("signout seccessfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  //   setting up an observer to keep user logged in while reload
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
  return {
    user,
    isLoading,
    signInWithGoogle,
    logOut,
    setIsLoading,
  };
};

export default useFirebase;
