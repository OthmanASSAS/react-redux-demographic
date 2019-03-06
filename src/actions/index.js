import { GET_COUNTRIES, ERROR_GET_COUNTRIES, GET_MORTALITY } from "./types.js";
import axios from "axios";

const API_END_POINT = "http://api.population.io:80/1.0/";
const DEFAULT_PARAM = "25/today";

export const getCountries = () => {
  return dispatch => {
    return axios(`${API_END_POINT}countries`)
      .then(response => {
        console.log(response.data.countries);
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

export const getMortality = country => {
  return dispatch => {
    return axios(
      `${API_END_POINT}mortality-distribution/${country}/male/${DEFAULT_PARAM}`
    ).then(responseMale => {
      console.log({responseMale})
      axios(
        `${API_END_POINT}mortality-distribution/${country}/female/${DEFAULT_PARAM}`
      ).then(responseFemale => {
        console.log({responseFemale})
        dispatch({
          type: GET_MORTALITY,
          payload: {
            country: country,
            male: responseMale.data.mortality_distribution,
            female: responseFemale.data.mortality_distribution
          }
        });
      });
    });
  };
};
