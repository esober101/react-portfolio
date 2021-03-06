import React from 'react';
import { NavLink } from "react-router-dom";
import "../style.css";

class Nav extends React.Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand mb-1 h1">Eric Ober</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" >About |</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/portfolio" className="nav-link" >Portfolio</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default Nav;