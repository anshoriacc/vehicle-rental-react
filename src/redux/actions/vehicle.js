import { ACTION_STRING } from "./actionString";
import { vehicle } from "../../utils/vehicle";

export const vehicleAction = (category, limit) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: vehicle(category, limit),
  };
};
