import {fetchPosts} from "./utils";

export async function postsMiddleware({dispatch, action }) {
  switch (action.type) {
    case "FETCH_POSTS":
      dispatch({ type: "LOADING_POSTS" });
      try {
        const posts = await fetchPosts();
        dispatch({ type: "SET_POSTS", payload: posts });
      } catch (err) {
        dispatch({ type: "error", payload: err });
      }
  }
}

export function loggerMiddleware({ action, state}) {
  console.log({ action, state });
}
