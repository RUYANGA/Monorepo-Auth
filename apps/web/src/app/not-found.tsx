"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for does not exist or might have been moved.
      </p>
      <Button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-3"
      >
        Go Home
      </Button>
    </div>
  );
}

export default NotFound;
