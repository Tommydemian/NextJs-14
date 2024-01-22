import React from "react";
import { Suspense } from "react";
import { getUser } from "@/lib/getUser";
import { getUserPosts } from "@/lib/getUserPosts";
import { UserPosts } from "./components/UserPosts";
import type { Metadata } from "next";
import { getAllUsers } from "@/lib/getAllUsers";

import { notFound } from "next/navigation";

type Params = {
  params: { userId: string };
};

export async function generateStaticParams() {
  try {
    const users = await getAllUsers();

    return users.map((user: User) => ({
      params: { userId: user.id.toString() },
    }));
  } catch (error) {
    console.error("Error fetching users for static params generation:", error);

    // Return an empty array in case of an error
    // This prevents the generation of static pages for undefined routes
    return [];
  }
}

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

const UserPage = async ({ params: { userId } }: Params) => {
  //   const userData: Promise<User> = getUser(userId);
  //   const userPostsData: Promise<Post[]> = getUserPosts(userId);

  let user: User | undefined;

  try {
    user = await getUser(userId);
  } catch (err) {
    console.error(err);
  }

  if (!user) {
    return <div>Restaurant not found.</div>;
  }

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback="Loading...">
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};

export default UserPage;
