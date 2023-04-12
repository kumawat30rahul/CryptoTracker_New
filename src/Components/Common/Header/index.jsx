import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./style.css";
import Sidebar from "./drawer";

function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
      <Link to="/" className="router_link">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </Link>
      </h1>
      <div className="nav_links">
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
