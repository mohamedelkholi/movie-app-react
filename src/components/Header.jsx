import React from "react";
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header>
      <div className="container navBar">
        <div className="inner-content">
          <div className="brand">
            
            <Link to="/">TMBD</Link>
          </div>
          <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link >Pages</Link>
              </li>
              <li>
                <Link >Movies</Link>
              </li>
           
          </ul>
        </div>
      </div>
    </header>
  );
};
