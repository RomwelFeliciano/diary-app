import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

if (!baseURL) {
  throw new Error(
    "REACT_APP_API_URL is not set. Check client/.env.local (see .env.example).",
  );
}

const httpClient = axios.create({ baseURL });

// Attach the stored auth token, if any, to every outgoing request
httpClient.interceptors.request.use((config) => {
  const storedUser = localStorage.getItem("user");
  const token = storedUser ? JSON.parse(storedUser).token : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default httpClient;
