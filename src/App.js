import React, { createContext, Fragment } from "react";
import { Home } from "./Home";
import { useEnhancedReducer } from "./lib";
import { loggerMiddleware, postsMiddleware } from "./middlewares";
import { postsReducer } from "./reducers";

export const PostsContext = createContext({ state: null, dispatch: () => {} });

export function App() {
  const [state, dispatch] = useEnhancedReducer(
    postsReducer,
    { posts: null, loading: false },
    [postsMiddleware, loggerMiddleware]
  );
  return (
    <Fragment>
      <PostsContext.Provider value={{ state, dispatch }}>
        <Home />
      </PostsContext.Provider>
    </Fragment>
  );
}
