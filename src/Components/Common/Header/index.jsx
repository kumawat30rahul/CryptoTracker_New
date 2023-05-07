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
      <Link to="/" className={`router_link ${darkMode ? 'dark' : 'light'}`}>
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </Link>
      </h1>
      <div className="nav_links">
        <SwitchComponent />
        <Link to="/" className="router_link">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare" className="router_link">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist" className="router_link">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard" className="router_link">
          <Button
            text={"Dashboard"}
          />
        </Link>
      </div>
      <div className="mobile-sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default Header;
