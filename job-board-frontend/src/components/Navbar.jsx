import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">JobBoard</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employer-dashboard">Employer Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/candidate-dashboard">Candidate Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
