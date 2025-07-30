"use client";

import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { ReusableDialog } from "@/components/dialoge-form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { SidebarInset } from "@/components/ui/sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

const urlServer=process.env.NEXT_PUBLIC_API_URL

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(urlServer + "/user")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <span className="text-2xl font-extrabold text-indigo-500">
          Dashboard Overview
        </span>
        <div className="grid auto-rows-min gap-4 md:grid-cols-4 text-center">
          <div className="bg- shadow-lg aspect-video rounded-xl p-7">
            <div className="flex items-center justify-between p-4">
              <h1 className="font-bold text-2xl">Total Products</h1>
              <TrendingUp size={48} className="text-red-600" />
            </div>
            <span className="text-3xl">89</span>
          </div>
          <div className="bg- shadow-lg aspect-video rounded-xl p-7">
            <div className="flex items-center justify-between p-4">
              <h1 className="font-bold text-2xl">Total Users</h1>
              <Users size={50} className="text-red-600" />
            </div>
            <span className="text-3xl">{users.length}</span>
          </div>
          <div className="bg- shadow-lg aspect-video rounded-xl p-7">
            <div className="flex items-center justify-between p-4">
              <h1 className="font-bold text-2xl">Total Orders</h1>
              <ShoppingCart size={48} className="text-red-600" />
            </div>
            <span className="text-3xl">9</span>
          </div>
          <div className="bg- shadow-lg aspect-video rounded-xl p-7">
            <div className="flex items-center justify-between p-4">
              <h1 className="font-bold text-2xl">Compled Orders</h1>
              <DollarSign size={48} className="text-red-600" />
            </div>
            <span className="text-3xl">50</span>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <ReusableDialog
            title="New Products"
            description="Create new products."
            triggerText="Add Product"
            firstButton="Cancel"
            secondButton="Add New Product"
          >
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Computer" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="number">Price</Label>
              <Input
                id="number"
                name="number"
                type="number"
                placeholder="300,000Frw"
                min={1}
                required
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username">Description</Label>
              <textarea
                className="border-2 p-3 rounded-lg"
                placeholder="Description of your product"
              />
            </div>
          </ReusableDialog>
        </div>

        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </SidebarInset>
  );
}
