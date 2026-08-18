import React from "react";

export default function Settings() {
  return (
    <div
      style={{
        padding: "40px",
        color: "white",
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <h1>⚙️ Settings</h1>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#1e293b",
          borderRadius: "10px",
        }}
      >
        <h3>Profile Settings</h3>
        <p>Manage admin profile information.</p>

        <h3>Password Settings</h3>
        <p>Change password and security options.</p>

        <h3>Quiz Settings</h3>
        <p>Configure quiz duration and rules.</p>
      </div>
    </div>
  );
}