import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from "firebase/auth";
import {useEffect, useState } from "react";
import initializeAuthentication from "../firebase/Firebase.init";
initializeAuthentication();     







const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [services, setServices] = useState([]);
  const [news, setNews] = useState([])
  const [loading,setLoading] = useState(true);
    

//providers

//googleProvider
const googleProvider = new GoogleAuthProvider();




const auth = getAuth();
   

 //google sign in
 const signInWithGoogle = () => {
   return signInWithPopup(auth, googleProvider);
  };


  

    // get email
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
    
    // get password
  const getPassword = (e) => {
    setPassword(e.target.value);
  };


    
    //email sign in

  const signInWithEmail = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      setUser(result.user);
    }).catch(error => {
      setError(error.message);
    })
    };
    
    //sign up

  const signUp = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
    }).catch(error => {
      console.log(error.message);
    })
  };

    // sign out

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // If an error occured .
      });
    };
    
    //get the user, who sign in currently

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else{
        setUser({});
      }
      setLoading(false);
    });
    return () => unSubscribe;
  }, [auth]);


  useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => setServices(data))

  }, []);

  useEffect(() => {
    fetch("./news.json")
      .then(res => res.json())
      .then(data => setNews(data))
  }, []);

    return {
        signInWithGoogle,
        user,
        error,
        logOut,
        signInWithEmail,
        getEmail,
        getPassword,
        signUp,
        services,
        news,
        loading
    };
};

export default useFirebase;


