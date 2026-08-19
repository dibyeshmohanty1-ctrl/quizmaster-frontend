import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaClipboardList,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Dashboard.css";

export default function AdminDashboard() {
  const stats = [
    { title: "Students", value: "245", icon: "👨‍🎓" },
    { title: "Quizzes", value: "32", icon: "📚" },
    { title: "Active Users", value: "89", icon: "🟢" },
    { title: "Avg Score", value: "91%", icon: "🏆" },
  ];

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>QuizMaster AI</h2>

       <ul>
  <li>
    <Link to="/admin">
      <FaTachometerAlt /> Dashboard
    </Link>
  </li>

  <li>
    <Link to="/student">
      <FaUserGraduate /> Student
    </Link>
  </li>

  <li>
  <Link to="/createquiz">
    <FaClipboardList /> Create Quiz
  </Link>
</li>

  <li>
    <Link to="/quiz">
      <FaClipboardList /> Quiz
    </Link>
  </li>

  <li>
    <Link to="/analytics">
      <FaChartBar /> Analytics
    </Link>
  </li>

  <li>
    <Link to="/settings">
      <FaCog /> Settings
    </Link>
  </li>

  <li>
    <Link to="/">
      <FaSignOutAlt /> Logout
    </Link>
  </li>
</ul>
</aside>

      <main className="admin-content">
        <motion.div
          className="admin-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Admin Dashboard 🚀</h1>
          <p>Manage quizzes, students and analytics</p>
        </motion.div>

        <div className="admin-stats">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="admin-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span>{item.icon}</span>
              <h2>{item.value}</h2>
              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="recent-table"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>Recent Quiz Activity</h2>

          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Quiz</th>
                <th>Score</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul</td>
                <td>Java Quiz</td>
                <td>92%</td>
              </tr>

              <tr>
                <td>Priya</td>
                <td>Python Quiz</td>
                <td>95%</td>
              </tr>

              <tr>
                <td>Aman</td>
                <td>DBMS Quiz</td>
                <td>89%</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </main>
    </div>
  );
}