import axios from "axios";

// const
import constants from "../constant";

export const findMovieByTitle = (name) => {
  return axios
    .get(`${constants.OMDbURL}s=${name}&type=movie`)
    .then((res) => res.data.Search);
};

export const getMovieById = (id) => {
  return axios
    .get(`${constants.OMDbURL}i=${id}&plot=full`)
    .then((res) => res.data);
};
