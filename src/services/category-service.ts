import axios from "axios";

export const getBasicWineDataOptions = () => {
  return axios
    .get(`/api/category/base-wine-categories`)
    .then((res) => res.data);
};