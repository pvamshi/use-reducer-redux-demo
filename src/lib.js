import { useReducer } from "react";

export function useEnhancedReducer(reducer, initialState, middlewares) {
  const [state, originalDispatch] = useReducer(reducer, initialState);
  const advancedDispatch = function dispatch(action) {
    if (middlewares && Array.isArray(middlewares)) {
      middlewares.forEach(middleware =>
        middleware({ dispatch ,action, state })
      );
    }
    return originalDispatch(action);
  };
  return [state, advancedDispatch];
}
