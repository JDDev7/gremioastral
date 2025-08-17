"use client";
import Link from "next/link";
import React from "react";


function LoginButton() {

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Link href={`${process.env.NEXT_PUBLIC_LOGIN_URL!}`}>Log in</Link>
    </button>
);
}

export default LoginButton;
