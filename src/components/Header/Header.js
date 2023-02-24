import React from "react";
import "./Header.css";

//
function Header() {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_logo">
          <h1>Logo</h1>
        </div>
        <div className="header_nav">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/filters">Filters</a>
            </li>
            <li>
              <a href="/search">Search</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
