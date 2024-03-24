import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleButtonClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/Error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-2 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between ">
      <img
        className="w-56"
        src = { LOGO }
        alt="logo"
      />
      {user && (
        <div className="flex p-4 h-24">
          <img className="p-1" src={user?.photoURL} alt="userIcon" />
          <button
            onClick={handleButtonClick}
            className="p-4  text-white font-bold bg-red-500 rounded-xl"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
