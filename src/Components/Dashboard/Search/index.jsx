import React, { useState } from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Search({ search, onSearchChange }) {
  return (
    <div className="search_wrapper">
        <div className="search_div">
        <SearchRoundedIcon />
        <input
            placeholder="Search"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e)}
        />
        </div>
    </div>
  );
}

export default Search;