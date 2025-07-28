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
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { userRegisterSchema } from "./(main)/auth/hooks/userForm";
const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

type FormData = z.infer<typeof userRegisterSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(userRegisterSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await axios.post(serverUrl + "/auth/register", data);

      toast.success("Registered successfully!");
      if (res.status === 201) {
        router.push("/auth");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Something went wrong, try again');
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-white">
      <Card className="w-full max-w-sm shadow-2xl shadow-pink-300 from-cyan-300">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-blue-500">
            Create your account
          </CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">User Name</Label>
                <Input
                  type="text"
                  placeholder="ex: Merci RUYANGA"
                  id="name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="ex: merci@example.com"
                  id="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="ex: Merci%37"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-4 mt-9">
            <Button
              type="submit"
              disabled={isSubmitting || loading}
              className="w-full bg-blue-500 hover:bg-blue-800 p-5 text-2xl flex items-center justify-center"
            >
              {isSubmitting || loading ? (
                <>
                  <Loader className="mr-2 h-5 w-5 animate-spin" />
                  Creating...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <p>
              <Link
                href="/auth"
                className="hover:text-blue-700 hover:underline"
              >
                I have an account?{" "}
                <span className="text-blue-600 underline">Login</span>
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
