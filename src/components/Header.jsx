import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  const handleButtonClick = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/Error")
    })
  }

  return (
    <div className="absolute px-2 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between ">
      <img
        className="w-56"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      { user && (
        <div className="flex p-4 h-24">
        <img 
        className="p-1"
          src={user?.photoURL}
          alt="userIcon"
        />
        <button
          onClick={handleButtonClick}
          className='p-4  text-white font-bold bg-red-500 rounded-xl'
         >
          Sign Out
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
