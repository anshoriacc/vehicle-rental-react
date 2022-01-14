import axios from "axios";

export const detailProfile = (accessToken) => {
  const URL = `${process.env.REACT_APP_HOST}/users/detail`;
  return axios.get(URL, { headers: { "x-access-token": accessToken } });
};

export const editProfile = (accessToken, body) => {
  const URL = `${process.env.REACT_APP_HOST}/users/edit`;
  return axios.patch(URL, { headers: { "x-access-token": accessToken } });
};
