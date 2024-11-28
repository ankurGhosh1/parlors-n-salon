// pages/404.js
import React from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="Page Not Found - My Blog"
        description="The page you are looking for does not exist. Return to the homepage."
      />
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
}
