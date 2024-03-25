import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-4 w-1/4 text-base">{overview}</p>
      <button className="p-3 px-12 text-lg bg-white text-black rounded-md hover:bg-opacity-80">
        Play
      </button>
      <button className=" mx-2 p-3 px-12 text-lg bg-gray-500 bg-opacity-50 rounded-md"> More Info</button>
    </div>
  );
};

export default VideoTitle;
