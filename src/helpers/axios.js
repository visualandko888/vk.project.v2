import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/backend/`,
});

export const instanceAxios = () => {
  return axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/backend/`,
  });
};
export default instance;
