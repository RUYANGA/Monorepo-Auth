import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { UserCard } from "../userCard";

const urlServer = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

type User = {
  id: string;
  name: string;
  email: string;
  onDeleted?:()=> void
};

function UserData() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(urlServer + "/user")
      .then((res) => {
        setUsers(res.data);
        toast.success("Get users successfully");
      })
      .catch((err) => {
        toast.error("Error to get users!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-5 p-2">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDeleted={()=>setUsers((u)=>u.filter((prev)=>prev.id !== user.id))} />
      ))}
    </div>
  );
}

export default UserData;
