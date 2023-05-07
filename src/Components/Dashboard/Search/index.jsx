import React, { useContext, useState } from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { DarkModeProvider } from "../../../App";

function Search({ search, onSearchChange }) {
  const {darkMode} = useContext(DarkModeProvider)

  return (
    <div className="search_wrapper">
        <div className={`search_div ${darkMode ? 'dark-bg-search' : 'light-bg-search' }`}>
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