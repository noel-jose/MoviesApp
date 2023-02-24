import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ setSearchText }) => {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="&#xF002;  Search something"
        onInput={(e) => {
          console.log(e.target.value);
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
