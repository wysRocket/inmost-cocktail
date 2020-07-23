import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

export const cocktailsAPI = {
  fetchFilters() {
    return instance.get(`list.php?c=list`);
  },
  fetchList(value) {
    return instance.get(`filter.php?c=` + value);
  },
};
