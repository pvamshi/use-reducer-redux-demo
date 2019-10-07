export async function fetchPosts() {
  const response = await fetch("http://localhost:3000/posts");
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error("Network failed");
}
