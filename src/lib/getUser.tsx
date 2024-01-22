export const getUser = async (userId: string): Promise<User> => {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      throw new Error("Failed to fetch user");
    });

  return user;
};
