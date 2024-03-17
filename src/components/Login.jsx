import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Login Background"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="font-semibold text-2xl py-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        { !isSignInForm && (
          <input
          type="text"
          placeholder="Full Name"
          className="my-3 p-3 w-full bg-gray-700 "
        />
        )
        }
        <input
          type="text"
          placeholder="Email Address"
          className="my-3 p-3 w-full bg-gray-700 "
        />
        <input
          type="password"
          placeholder="Password"
          className="my-3 p-3 w-full bg-gray-700 "
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg text-sm">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-sm" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now" : "Already Registered? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
