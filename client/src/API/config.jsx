import axios from "axios";

const Anyware = axios.create({
  baseURL: "http://localhost:3000/",
});

Anyware.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
export default Anyware;
