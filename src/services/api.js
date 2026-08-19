import axios from "axios";

const api = axios.create({
  baseURL: "https://quizmaster-backend-1-3g2m.onrender.com/api",
});

export default api;