export const getAllUsers = async (): Promise<User[]> => {
  const users: Promise<User[]> = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      throw new Error("Failed to fetch users");
    });

  return users;
};
