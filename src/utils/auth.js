import axios from "axios";

export const login = (body) => {
  const URL = `${process.env.REACT_APP_HOST}/auth/login`;
  return axios.post(URL, body);
};

export const register = (body) => {
  const URL = `${process.env.REACT_APP_HOST}/auth/register`;
  return axios.post(URL, body);
};
