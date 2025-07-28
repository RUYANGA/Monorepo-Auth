"use client";

import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Loader } from "lucide-react";

type MyUser = {
  sub: string;
  email: string;
  name: string;
};

function Page() {
  const [user, setUser] = useState<MyUser | null>(null);
  const [isLoading, setLoading] = useState(true); // default true
  const [hasCheckedToken, setHasCheckedToken] = useState(false); // new flag

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode<MyUser>(token);
        setUser(decoded);
      } catch (err) {
        console.error("Invalid token",err);
        setUser(null);
      }
    }

    setLoading(false);
    setHasCheckedToken(true);
  }, []);

  return (
    <div className="">
      {isLoading || !hasCheckedToken ? (
        <div className="flex items-center justify-center mt-96">
          <Loader className="h-5 w-5 animate-spin mr-2" />
          <span>Loading user...</span>
        </div>
      ) : user ? (
        <div>
          <h1 className="text-xl font-bold">Name: {user.name}</h1>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p className="text-red-500">No user found</p>
      )}
    </div>
  );
}

export default Page;
