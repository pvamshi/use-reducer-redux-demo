import React, { useContext, useEffect } from "react";
import { PostsContext } from "./App";

export function Home() {
  // const posts = usePosts(null);

  const {
    state: { posts, loading },
    dispatch
  } = useContext(PostsContext);

  useEffect(() => {
    if (posts === null) {
      dispatch({ type: "FETCH_POSTS" });
    }
  }, [posts]);
  return <p> {loading ? "loading" : JSON.stringify(posts)}</p>;
}
