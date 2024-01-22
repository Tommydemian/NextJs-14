"use client";
import React from "react";

const ErrorPage = ({ error }: { error: Error }) => {
  console.error(error);

  return <div>Something went wrong, try again!</div>;
};

export default ErrorPage;
