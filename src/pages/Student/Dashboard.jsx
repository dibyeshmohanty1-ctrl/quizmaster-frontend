import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h1 className="logo">QuizMaster</h1>

        <nav>
          <Link to="/student" className="menu-item">
            🏠 Dashboard
          </Link>

          <Link to="/quiz" className="menu-item">
            📚 My Quizzes
          </Link>

          <Link to="/result" className="menu-item">
            📊 Results
          </Link>

          <Link to="/profile" className="menu-item">
            👤 Profile
          </Link>

          <Link to="/" className="menu-item">
            🚪 Logout
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">

        <div className="welcome-card">
          <h1>Welcome Back 👋</h1>
          <p>Ready for your next challenge?</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h2>12</h2>
            <p>Quizzes Taken</p>
          </div>

          <div className="stat-card">
            <h2>89%</h2>
            <p>Average Score</p>
          </div>

          <div className="stat-card">
            <h2>#5</h2>
            <p>Rank</p>
          </div>

          <div className="stat-card">
            <h2>3</h2>
            <p>Certificates</p>
          </div>
        </div>

        <div className="activity-card">
          <h2>Recent Activity</h2>

          <div className="activity-item">
            Completed Java Quiz - 92%
          </div>

          <div className="activity-item">
            Completed Python Quiz - 88%
          </div>

          <div className="activity-item">
            Completed DBMS Quiz - 95%
          </div>
        </div>

      </div>
    </div>
  );
}