import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth-page">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Create Account</h1>
        <p>Join QuizMaster AI Today</p>

        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        <input type="password" placeholder="Confirm Password" />

        <Link to="/login">
  <button type="button">
    Create Account
  </button>
</Link>

        <span>
          Already have an account?
          <Link to="/login"> Login</Link>
        </span>
      </motion.div>
    </div>
  );
}