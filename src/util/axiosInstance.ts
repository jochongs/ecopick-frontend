import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://ecopick-server-bfg9ckcbhqgmf2du.canadacentral-01.azurewebsites.net/api",
});

export default axiosInstance;
