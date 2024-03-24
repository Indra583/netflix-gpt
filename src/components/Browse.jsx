import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";

const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryConatiner />
    </div>
  );
};

export default Browse;
