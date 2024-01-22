import React from "react";

type Props = {
  promise: Promise<Post[]>;
};
export const UserPosts = async ({ promise }: Props) => {
  const posts = await promise;
  return (
    <>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <br />
          </article>
        );
      })}
    </>
  );
};
