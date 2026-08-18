import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
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

        <form>
          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />
         <Link to="/student">
  <button type="button">
    Login
  </button>
</Link>
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