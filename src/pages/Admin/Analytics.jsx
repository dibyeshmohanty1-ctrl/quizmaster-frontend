import React from "react";

export default function Analytics() {
  return (
    <div
      style={{
        padding: "40px",
        color: "white",
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <h1>📊 Analytics Dashboard</h1>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#1e293b",
          borderRadius: "10px",
        }}
      >
        <h3>Total Quizzes: 32</h3>
        <h3>Total Students: 245</h3>
        <h3>Average Score: 91%</h3>
      </div>
    </div>
  );
}