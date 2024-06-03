import { useEffect } from "react";
import { useFetchReducer } from "../reducers/fetchReducer";
import { Thread } from "../types/thread";

export const useFetchThreads = () => {
  const [state, dispatch] = useFetchReducer<Thread[][]>();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:3000/threads", { signal })
      .then((res) => res.json())
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response });
      })
      .catch((err) => {
        if (controller.signal.aborted) return;
        dispatch({ type: "FETCH_ERROR", payload: err });
      });

    return () => {
      controller.abort();
    };
  }, []);

  return [state.data, state.loading, state.error] as const;
};
