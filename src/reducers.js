export function postsReducer(
  state = { posts: null, loading: false },
  { type, payload }
) {
  switch (type) {
    case "LOADING_POSTS":
      return { posts: state.posts, loading: true };
    case "SET_POSTS":
      return { posts: payload, loading: false };
    default:
      return state;
  }
}
