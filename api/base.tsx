import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
  headers: {
    Accept: "application/json",
    // You can add other default headers here
    "Content-Type": "application/json", // common header for JSON requests
  },
});

export default instance;
