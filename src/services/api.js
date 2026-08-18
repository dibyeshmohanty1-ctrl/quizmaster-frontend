import axios from "axios";

const api = axios.create({
 baseURL: "https://quizmaster-backend-39nr.onrender.com/api",
});

export default api;