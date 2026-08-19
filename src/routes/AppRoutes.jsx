import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AdminDashboard from "../pages/Admin/Dashboard";
import StudentDashboard from "../pages/Student/Dashboard";
import QuizPage from "../pages/Quiz/QuizPage";
import ResultPage from "../pages/Quiz/ResultPage";
import Analytics from "../pages/Admin/Analytics";
import Settings from "../pages/Admin/settings";
import Profile from "../pages/Student/profile";
import CreateQuiz from "../pages/Admin/CreateQuiz";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/admin" element={<AdminDashboard />} />

      <Route path="/student" element={<StudentDashboard />} />

      <Route path="/quiz" element={<QuizPage />} />

      <Route path="/result" element={<ResultPage />} />
      <Route path="/analytics" element={<Analytics />} />
       <Route path="/settings" element={<Settings />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/create-quiz" element={<CreateQuiz />} />
    </Routes>
  );
}