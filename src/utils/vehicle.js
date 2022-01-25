import axios from "axios";

export const getVehicle4 = (category) => {
  const URL = `${process.env.REACT_APP_HOST}/vehicles/${category}/?limit=4&page=1`;
  return axios.get(URL);
};

export const getVehicle16 = (category, page) => {
  const URL = `${process.env.REACT_APP_HOST}/vehicles/${category}/?limit=16&page=1`;
  return axios.get(URL);
};

export const getVehicleDetail = (vehicleId) => {
  const URL = `${process.env.REACT_APP_HOST}/vehicles/detail/${vehicleId}`;
  return axios.get(URL);
};

export const searchVehicle = (search) => {
  // const URL = `${process.env.REACT_APP_HOST}/vehicles/search/?keyword=${keyword}&category=${category}&location=${location}&limit=16&page=${page}`;
  const URL = `${process.env.REACT_APP_HOST}/vehicles${search}`;
  return axios.get(URL);
};

export const addVehicle = (accessToken, body) => {
  const URL = `${process.env.REACT_APP_HOST}/vehicles/`;
  return axios.get(URL, { headers: { "x-access-token": accessToken } }, body);
};

export const editVehicle = (accessToken, body, vehicleId) => {
  const URL = `${process.env.REACT_APP_HOST}/vehicles/${vehicleId}`;
  return axios.patch(URL, { headers: { "x-access-token": accessToken } }, body);
};

export const deleteVehicle = (accessToken, vehicleId) => {
  const URL = `${process.env.REACT_APP_HOST}/vehicles/${vehicleId}`;
  return axios.delete(
    URL,
    { headers: { "x-access-token": accessToken } }
  );
};
