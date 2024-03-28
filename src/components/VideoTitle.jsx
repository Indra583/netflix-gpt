import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[13%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-4 w-1/4 text-base">{overview}</p>
      <div className="my-6 md:m-0">
      <button className=" px-2 py-1 text-base md:py-3 md:px-12  md:text-lg bg-white text-black rounded-md hover:bg-opacity-80">
        Play
      </button>
      <button className="hidden md:inline-block mx-2 p-3 px-12 text-lg bg-gray-500 bg-opacity-50 rounded-md">
        More Info
      </button>
      </div>
    </div>
  );
};

export default VideoTitle;
