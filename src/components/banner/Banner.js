import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="heading">
        <h1>Search Properties to Rent</h1>
      </div>
      <div className="input">
        <select>
          <option id="0">Search with Search Bar</option>
        </select>
      </div>
    </div>
  );
}

export default Banner;
