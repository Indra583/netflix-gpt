import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="w-screen">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryConatiner />
        </>
      )}
    </div>
  );
};

export default Browse;
