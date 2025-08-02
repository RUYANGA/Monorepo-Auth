"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteDialoge from "./delete-dialoge";
import { DialogEditUser } from "./adminDashboard/editUser-form";

type User = {
  id: string;
  name: string;
  email: string;
};

type UserCardProps = {
  user: User;
  onDeleted?: () => void;
  onEdited?: (updatedUser: User) => void; 
};
export function UserCard({ user,onDeleted,onEdited}:UserCardProps) {
  const { name, email } = user;
  return (
    <Card className="w-full max-w-sm rounded-2xl border shadow-lg ">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold truncate">Name: {name}</CardTitle>
        {/* <CardDescription className={`text-sm ${statusColor}`}>
          {role} • {statusLabel}
        </CardDescription> */}
      </CardHeader>

      <CardContent className="text-sm space-y-3">
        <div className="grid gap-1">
          <span className="text-muted-foreground font-medium">Email</span>
          <p className="truncate">{email}</p>
        </div>
        {/* <div className="grid gap-1">
          <span className="text-muted-foreground font-medium">Role</span>
          <p>{role}</p>
        </div> */}
      </CardContent>

      <CardFooter className="flex justify-end gap-2 pt-4">
    
          <DialogEditUser userId={user.id} onEdited={onEdited} />
        
        <Button
          variant="destructive"
          size="sm"
          className="font-bold bg-red-500"
        >
          <DeleteDialoge userId={user.id} onDeleted={onDeleted} />
        </Button>
      </CardFooter>
    </Card>
  );
}
