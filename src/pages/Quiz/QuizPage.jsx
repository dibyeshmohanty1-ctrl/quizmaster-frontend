import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "../../services/api";
import "./Quiz.css";

export default function QuizPage() {
  const navigate = useNavigate();
  useEffect(() => {
  api.get("/quizzes/")
    .then((res) => {
      console.log("Quiz Data:", res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}, []);
  const [selected, setSelected] = useState("");

  const options = [
    "Framework",
    "Library",
    "Programming Language",
    "Database",
  ];

  return (
    <div className="quiz-container">
      <motion.div
        className="quiz-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="quiz-header">
          <h3>Question 1 of 10</h3>
          <div className="timer">⏱ 30s</div>
        </div>

        <div className="progress">
          <div className="progress-fill"></div>
        </div>

        <h2>What is React?</h2>

        <div className="options">
          {options.map((option, index) => (
            <motion.div
              key={index}
              className={`option ${
                selected === option ? "selected" : ""
              }`}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(option)}
            >
              {option}
            </motion.div>
          ))}
        </div>

        <div className="quiz-buttons">
  <button
    className="prev-btn"
    onClick={() => alert("Previous Question")}
  >
    Previous
  </button>

  <button
    className="next-btn"
   onClick={() => navigate("/result")}
  >
    Submit Quiz
  </button>
</div>
        
      </motion.div>
      </div>
  );
}
