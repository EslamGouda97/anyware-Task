import axios from "axios";

const Anyware = axios.create({
  baseURL: "https://any-ware-backend-awhf.vercel.app/",
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
