import axios from "axios"

export const api = axios.create({
  baseURL: "https://expense-tracker-817j.onrender.com/api/v1",
  withCredentials: true,
})