import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import SearchSuggestions from "./SearchSuggestions";
const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [resultsArray, setResultsArray] = useState([]);
  const [toggleSuggestions, setToggleSuggestions] = useState(false);
  const cachedValues = useSelector((store) => store.search.cache);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchResults(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchResults = async () => {
   
    if (cachedValues[searchText]) {
      console.log("cached: ", cachedValues);
      console.log("resultsArray: ", resultsArray);
      setResultsArray(cachedValues[searchText]);
      return;
    }

    const results = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchText
    );
    const jsonResults = await results.json();
    setResultsArray(jsonResults[1]);
    dispatch(cacheResults({ key: searchText, value: jsonResults[1] }));
    
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="col-span-1 flex">
        <button onClick={handleClick}>
          {" "}
          <img
            className="h-9 mr-2 "
            src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
            alt="Menu Icon"
          />
        </button>
        <a href="/">
          {" "}
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="Youtube Logo"
          />
        </a>
      </div>

      <div className="col-span-10 flex flex-col justify-items-center">
        <div className="flex">
          <input
            onFocus={() => setToggleSuggestions(true)}
            onBlur={() => setToggleSuggestions(false)}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 pl-5 text-sm w-1/2 rounded-l-full border border-gray-400"
          />
          <button className="py-1 px-2 rounded-r-full bg-gray-300">
            Search
          </button>
        </div>

        {toggleSuggestions && resultsArray?.length > 0 ? (
          <SearchSuggestions resultsArray={resultsArray} />
        ) : null}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
          alt="User Icon"
        />
      </div>
    </div>
  );
};

export default Head;
