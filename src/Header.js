import React from "react";
import "./Header.css";

// import { Link } from "react-router-dom";

function Header() {
  function Hello() {
    console.log(document.getElementById("a").value);
  }

  return (
    <div className="header">
      <header>
        <h2>Rick and Morty Application</h2>
        <h3>Search for character</h3>
        <input id="a" onChange={Hello} />
      </header>
    </div>
  );
}

export default Header;
