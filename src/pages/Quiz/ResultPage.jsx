import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

export default function ResultPage() {
  return (
    <div className="result-page">
      <div className="result-card">

        <div className="result-icon">🏆</div>

        <h1>Quiz Completed!</h1>

        <p className="result-subtitle">
          Great job! Here are your results.
        </p>

        <div className="score-circle">
          <h2>89%</h2>
        </div>

        <div className="result-stats">
          <div className="result-box">
            <h3>10</h3>
            <p>Total Questions</p>
          </div>

         <div className="result-box">
            <h3>9</h3>
            <p>Correct Answers</p>
          </div>

          <div className="result-box">
            <h3>1</h3>
            <p>Wrong Answers</p>
          </div>
        </div>

        <div className="result-buttons">
          <Link to="/quiz" className="retry-btn">
            Retry Quiz
          </Link>

          <Link to="/student" className="dashboard-btn">
            Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}