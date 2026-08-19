import React, { useState } from "react";

export default function CreateQuiz() {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const quizData = {
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer,
    };

    console.log("Quiz Created:", quizData);

    localStorage.setItem("quiz", JSON.stringify(quizData));

    alert("Quiz Created Successfully!");

    setQuestion("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setCorrectAnswer("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Create Quiz
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="text"
            placeholder="Option A"
            value={optionA}
            onChange={(e) => setOptionA(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="text"
            placeholder="Option B"
            value={optionB}
            onChange={(e) => setOptionB(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="text"
            placeholder="Option C"
            value={optionC}
            onChange={(e) => setOptionC(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="text"
            placeholder="Option D"
            value={optionD}
            onChange={(e) => setOptionD(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="text"
            placeholder="Correct Answer (A/B/C/D)"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            style={inputStyle}
            required
          />

          <button type="submit" style={buttonStyle}>
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #334155",
  borderRadius: "8px",
  background: "#0f172a",
  color: "white",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#8b5cf6",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};