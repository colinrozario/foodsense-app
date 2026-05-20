import axios from "axios";

// Base URL will be configured per environment.
// Server routes handle all secret API keys — never put them here.
const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:3000";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});
