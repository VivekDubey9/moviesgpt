import React, { useRef, useState } from "react";
import Header from "./Layout/Header";
<<<<<<< HEAD
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
=======
>>>>>>> 126803a314fe37129596f6287a2e3e9bae0e1154

import { validateData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

<<<<<<< HEAD
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null); //reference to those input boxes..

  const handleSubmit = () => {
    console.log(email); //this is an object contains current.value field
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //sign up logic read firebase authentication docs
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    }
  };

  const handleToggleClick = () => {
    setIsSignIn(!isSignIn); //for toggle the state
    console.log(email);
=======
  const [errorMessage,setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);  //reference to those input boxes..

  const handleSubmit =()=>{
     console.log(email);     //this is an object contains current.value field
     const message = validateData(email.current.value, password.current.value);

     setErrorMessage(message);


  }

  const handleToggleClick = () => {
    setIsSignIn(!isSignIn);   //for toggle the state 
    console.log(email);
    
>>>>>>> 126803a314fe37129596f6287a2e3e9bae0e1154
  };
  return (
    <div className="">
      <Header />

      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-70 w-3/12 p-12 absolute  text-white my-40 mx-auto right-0 left-0"
      >
        <h1 className="font-bold text-2xl my-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 my-2 bg-gray-700 w-full "
            type="text"
            placeholder="enter your Name"
          />
        )}
        <input
          ref={email}
          className="p-2 my-2 bg-gray-700 w-full "
          type="email"
          placeholder="enter your email address"
        />
        <input
          ref={password}
          className="p-2 my-2 bg-gray-700 w-full "
          type="password"
          placeholder="Enter your password"
        />
        {errorMessage && <p className="text-red-500 ">{errorMessage}</p>}
<<<<<<< HEAD
        <button
          onClick={handleSubmit}
          className="text-white bg-red-500 w-full py-2 my-2 "
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer my-4 p-2" onClick={handleToggleClick}>
=======
        <button onClick ={handleSubmit} className="text-white bg-red-500 w-full py-2 my-2 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer my-4 p-2" onClick={handleSubmitClick}>
>>>>>>> 126803a314fe37129596f6287a2e3e9bae0e1154
          {isSignIn ? "New to netflix? Sign up" : "Already registered?Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
