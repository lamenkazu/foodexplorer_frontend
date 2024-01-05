import axios from "axios";

const devUrl = "http://localhost:3033";
const productionUrl = "https://foodexplorer-backend-or5d.onrender.com";

export const api = axios.create({
  baseURL: productionUrl,
  withCredentials: true,
});
