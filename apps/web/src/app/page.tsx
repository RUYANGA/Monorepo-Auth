"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

export default function Page() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [isLoading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3001/auth/register", form);
      toast.success("Account created successfully!");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-indigo-100">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-blue-500">
            Create your account
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="fname">First Name</Label>
                <Input
                  name="firstName"
                  id="fname"
                  type="text"
                  placeholder="Merci"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                />
                 {isLoading?form.email?"":"Email required":""}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lname">Last Name</Label>
                <Input
                  name="lastName"
                  id="lname"
                  type="text"
                  placeholder="RUYANGA"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
                {form.email?"":"Email required"}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="+250780..."
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline hover:text-blue-700"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4 mt-9">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 hover:bg-blue-800 p-5 text-2xl flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader className="mr-2 h-5 w-5 animate-spin" />
                  Creating...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <p className="text-xl">
              I have an account?{" "}
              <Link
                href="/login"
                className="hover:text-blue-700 hover:underline"
              >
                Login
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
