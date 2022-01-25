import axios from "axios";

export const history = (accessToken) => {
  const URL = `${process.env.REACT_APP_HOST}/reservation`;
  return axios.get(URL, { headers: { "x-access-token": accessToken } });
};

export const makeReservation = (accessToken, body) => {
  const URL = `${process.env.REACT_APP_HOST}/reservation`;
  return axios.post(URL, body, { headers: { "x-access-token": accessToken } });
};

export const reservationDetail = (accessToken, reservationId) => {
  const URL = `${process.env.REACT_APP_HOST}/reservation/${reservationId}`;
  return axios.get(URL, { headers: { "x-access-token": accessToken } });
};

export const rate = (accessToken, body, reservationId) => {
  const URL = `${process.env.REACT_APP_HOST}/reservation/${reservationId}/rate`;
  return axios.patch(URL, { headers: { "x-access-token": accessToken } }, body);
};
