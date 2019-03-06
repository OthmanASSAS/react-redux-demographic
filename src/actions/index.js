import { GET_COUNTRIES, ERROR_GET_COUNTRIES } from "./types";
import axios from "axios";

const URL = "http://api.population.io:80/1.0/countries";

export const getCountries = () => {
  return dispatch => {
    axios(URL)
      .then(response => {
        console.log(response.data.countries)
        dispatch({
          type: GET_COUNTRIES,
          payload: response.data.countries
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR_GET_COUNTRIES,
          error: error.response.data.detail
        });
      });
  };
};
