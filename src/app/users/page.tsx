import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllUsers } from "@/lib/getAllUsers";

export const metadata: Metadata = {
  title: "Users",
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return (
    <section>
      <h2>
        <Link href={"/"}>Back Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </>
        );
      })}
    </section>
  );
};

export default UsersPage;
