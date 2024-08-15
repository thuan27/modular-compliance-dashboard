import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"; // Import CSS file

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Modular Compliance Dashboard</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Task Overview</Link>
          </li>
          <li>
            <Link to="/compliance-status">Compliance Status</Link>
          </li>
          <li>
            <Link to="/recent-activity">Recent Activity</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
