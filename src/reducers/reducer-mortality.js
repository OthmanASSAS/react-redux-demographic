import { GET_MORTALITY } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_MORTALITY:
      return [
          {country:action.payload.country,
          male:action.payload.male,
          female:action.payload.female}, ...state
      ];
   
    default:
      return state;
  }
};
