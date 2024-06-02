import { useReducer } from "react";

export const ACTIONS = {
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

type ThreadState<T = any> = {
  loading: boolean;
  error: any;
  data: T;
};

type Action<T> = {
  type: keyof typeof ACTIONS;
  payload: T;
};

const initialState: ThreadState = {
  data: [],
  error: null,
  loading: true,
};

const reducer = <T>(state: ThreadState<T>, action: Action<T>) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_ERROR": {
      return {
        ...state,
        loading: false,
        thread: {},
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export const useThreadReducer = <T>(initState = initialState) =>
  useReducer(reducer<T>, initState);
