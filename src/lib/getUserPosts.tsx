export const getUserPosts = async (userId: string): Promise<Post[]> => {
  const userPosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      throw new Error("Failed to fetch userPosts");
    });

  return userPosts;
};
