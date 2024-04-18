import React from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); //subscribing to appstore 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-24 z-10 bg-gradient-to-b  from-black flex justify-between">
      <img
        className="w-60 px-8 py-2 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex ">
          <img
            className="w-16 h-12 my-8 mix-blend-multiply "
            src={user.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-500 m-8 ml-0 p-2 rounded-lg text-white "
          >
            Sign out!
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
