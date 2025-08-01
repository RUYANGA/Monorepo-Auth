import axios from "axios";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const urlServer = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
};

export function DashboardSummary() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(urlServer + "/user")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        toast.error(err.response?.message.data || "Failed");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
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
  );
}

export default DashboardSummary;
