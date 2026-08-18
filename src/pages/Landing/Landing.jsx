import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">

      {/* Background Animation */}
      <div className="bg-circle c1"></div>
      <div className="bg-circle c2"></div>
      <div className="bg-circle c3"></div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">QuizMaster </h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Smart Quiz Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          AI Powered Quiz Management System For Students & Teachers
        </motion.p>

        <motion.div
          className="hero-btns"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link to="/login">
  <button>Get Started</button>
</Link>

<Link to="/register">
  <button>Register</button>
</Link>

          
        </motion.div>

      </section>

      {/* Features */}
      <section className="features">

        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>⚡ Fast Quizzes</h3>
          <p>Create and attempt quizzes instantly.</p>
        </motion.div>

        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>📊 Analytics</h3>
          <p>Track performance with detailed reports.</p>
        </motion.div>

        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>🤖 AI Powered</h3>
          <p>Generate smart quizzes using AI.</p>
        </motion.div>

      </section>

      {/* Statistics */}
      <section className="stats">

        <div>
          <h2>10K+</h2>
          <p>Students</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Teachers</p>
        </div>

        <div>
          <h2>50K+</h2>
          <p>Quizzes</p>
        </div>

      </section>

      {/* Footer */}
      <footer>
        © 2026 QuizMaster  | All Rights Reserved
      </footer>

    </div>
  );
}