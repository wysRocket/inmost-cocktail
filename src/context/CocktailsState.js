import React, { useReducer } from "react";
import { CocktailsContext } from "./cocktailsContext";
import { cocktailsReducer } from "./cocktailsReducer";
import { cocktailsAPI } from "../api/api";
import { SET_FILTERS, SET_DRINKS, SET_LOADING } from "./cocktailsReducer";

export const CocktailsState = ({ children }) => {
  const [state, dispatch] = useReducer(cocktailsReducer, {
    drinks: [],
    filters: [],
    loading: false,
  });
  const setLoading = () => dispatch({ type: SET_LOADING });

  const setFilters = (payload) => {
    dispatch({ type: SET_FILTERS, payload });
  };

  const fetchFilters = async () => {
    const res = await cocktailsAPI.fetchFilters();
    const payload = Object.keys(res.data.drinks).map((i) => {
      return { ...res.data.drinks[i], checked: true };
    });
    setFilters(payload);
  };

  const setDrinks = (data) => {
    dispatch({ type: SET_DRINKS, payload: data });
  };
  const fetchList = async (value) => {
    setLoading();
    const res = await cocktailsAPI.fetchList(value);
    setDrinks(res.data.drinks);
  };

  return (
    <CocktailsContext.Provider
      value={{
        fetchFilters,
        fetchList,
        setFilters,
        drinks: state.drinks,
        filters: state.filters,
        loading: state.loading,
      }}
    >
      {children}
    </CocktailsContext.Provider>
  );
};
