import { useReducer } from "react";

export const ACTIONS = {
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

type FetchState<T = any, E = any> = {
  loading: boolean;
  error: E;
  data: T;
};

type Action<T, E> = {
  type: keyof typeof ACTIONS;
  payload: T | E;
};

const initialState: FetchState = {
  data: [],
  error: null,
  loading: true,
};

const reducer = <T, E>(state: FetchState<T, E>, action: Action<T, E>) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload as T,
      };
    case "FETCH_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.payload as E,
      };
    }
    default:
      return state;
  }
};

export const useFetchReducer = <T = any, E = any>(initState = initialState) =>
  useReducer(reducer<T, E>, initState);
