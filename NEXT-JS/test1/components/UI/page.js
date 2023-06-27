import React from "react";
import { Nav } from "../Layout/Nav";
import Link from "next/link";

export const Page = () => {
  return (
    <>
      <div>Hello Next.js!!</div>
      <Nav />

      <Link href={'../components/UI/Num2'}>click me</Link>
    </>
  );
};
