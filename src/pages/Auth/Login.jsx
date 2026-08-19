import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Auth.css";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/auth/login/",
        {
          username,
          password,
        }
      );

      localStorage.setItem(
        "access",
        response.data.access
      );

      localStorage.setItem(
        "refresh",
        response.data.refresh
      );

      alert("Login Successful");

      navigate("/student");

    } catch (error) {
      console.error(error);
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="auth-page">

      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Welcome Back</h1>
        <p>Login to continue your quiz journey</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="auth-links">
          <span>
            Don't have an account?
          </span>

          <Link to="/register">
            Register
          </Link>
        </div>

      </motion.div>

    </div>
  );
}