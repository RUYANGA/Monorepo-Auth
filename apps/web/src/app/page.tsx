import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-indigo-100 ">
      <Card className="w-full max-w-sm">

        <CardHeader>
          <CardTitle className="flex items-center justify-center text-2xl text-blue-500">Create your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6 ">
              <div className="grid gap-2">
                <Label htmlFor="fname">First Name</Label>
                <Input id="fname" type="text" placeholder="Merci" required />
              </div>
              <div className="grid gap-2">
                 <div className="grid gap-2">
                <Label htmlFor="lname">Last Name</Label>
                <Input id="lname" type="text" placeholder="RUYANGA" required />
              </div>
              <div className="grid gap-2">
                 <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2"></div>
              </div>
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block hover:text-blue-700 text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-800 p-5 text-2xl">
            Sign Up
          </Button>
           
            <p className="text-xl">I have account? <Link href={""} className="hover:text-blue-700 hover:underline">Login</Link></p>
        
        </CardFooter>
      </Card>
    </div>
  );
}
