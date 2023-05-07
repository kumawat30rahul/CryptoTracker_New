import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./style.css";
import Sidebar from "./drawer";
import SwitchComponent from "../SwitchButton";
import { DarkModeProvider } from "../../../App";

function Header() {

  const {darkMode} = useContext(DarkModeProvider)

  return (
    <div className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="logo">
      <a href="/" className={`router_link ${darkMode ? 'dark' : 'light'}`}>
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </a>
      </h1>
      <div className="nav_links">
        <SwitchComponent />
        <a href="/" className="router_link">
          <p className="link">Home</p>
        </a>
        <a href="/compare" className="router_link">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist" className="router_link">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard" className="router_link">
          <Button
            text={"Dashboard"}
          />
        </a>
      </div>
      <div className="mobile-sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default Header;
