import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-2 m-2 col-span-9"
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-600 rounded-lg text-white">
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
