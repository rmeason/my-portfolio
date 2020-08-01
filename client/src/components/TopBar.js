import React from "react";
import {Link} from "react-router-dom";
import "./TopBar.css";

function TopBar(props) {
  return (
<div class="top-bar" id="navigation">
  <div class="top-bar-left">
    <ul class="dropdown menu" data-dropdown-menu>
      <li class="menu-text">Michael Eason</li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</div>
  );
}

export default TopBar;