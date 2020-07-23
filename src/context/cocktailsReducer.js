export const SET_FILTERS = "SET_FILTERS";
export const SET_DRINKS = "SET_DRINKS";
export const SET_LOADING = "SET_LOADING";

const handlers = {
  [SET_DRINKS]: (state, { payload }) => ({
    ...state,
    drinks: [...payload],
    loading: false,
  }),
  [SET_FILTERS]: (state, { payload }) => ({
    ...state,
    filters: [...payload],
  }),
  [SET_LOADING]: (state) => ({
    ...state,
    loading: true,
  }),
  DEFAULT: (state) => state,
};

export const cocktailsReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
