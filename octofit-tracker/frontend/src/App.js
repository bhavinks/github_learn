import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/activities" element={<h1>Activities Page</h1>} />
            <Route path="/leaderboard" element={<h1>Leaderboard Page</h1>} />
            <Route path="/teams" element={<h1>Teams Page</h1>} />
            <Route path="/" element={<h1>Welcome to OctoFit Tracker</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
