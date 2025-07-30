"use client"

import { SidebarInset } from "@/components/ui/sidebar";
import React, { useEffect, useState } from "react";
import { UserCard } from "@/components/userCard";
import { ReusableDialog } from "@/components/dialoge-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";

const urlServer=process.env.NEXT_PUBLIC_API_URL

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
};

function UserPage() {
  const [users,setUsers]=useState<User[]>([]);
  const [isLoading,setLoading]=useState(true);
  
  useEffect(()=>{
    axios.get(urlServer + "/user")
    .then((res)=>{
      setUsers(res.data)
      toast.success("Get users successfully")
    })
    .catch((err)=>{
      toast.error("Error to get users!")
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])


  return (
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-4 p-4 ">
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <div className="flex items-center justify-end">
            <ReusableDialog
              title="Create New User"
              description="Create new user to your system."
              triggerText="Add User"
              secondButton="Add New User"
              firstButton="Cancel"
            >
              <div className="grid gap-3">
                <Label htmlFor="name">User name</Label>
                <Input id="name" name="name" placeholder="Computer" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="text">Role</Label>
                <Input id="text" type="text" placeholder="STAFF" />
              </div>
            </ReusableDialog>
          </div>
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-5 p-2 ml-5 ">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </SidebarInset>
  );
}

export default UserPage;
