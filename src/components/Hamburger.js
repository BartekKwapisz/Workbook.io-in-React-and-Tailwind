import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hamburger() {
  return (
    <>
      <header className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/offer-workers">Offer workers</Link>
          </li>
          <li>
            <Link to="/search-jobs">Search jobs</Link>
          </li>
          <li>
            <Link to="/search-workers">Search workers</Link>
          </li>
          <li>
            <Link to="/offer-jobs">Offer jobs</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
