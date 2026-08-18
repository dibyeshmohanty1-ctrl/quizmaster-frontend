import React from "react";

export default function Profile() {
  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h1>👤 Student Profile</h1>

      <div
        style={{
          marginTop: "20px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h3>Name: John Doe</h3>
        <h3>Roll No: 23CSE101</h3>
        <h3>Email: student@example.com</h3>
        <h3>Department: CSE</h3>
      </div>
    </div>
  );
}