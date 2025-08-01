import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { toast } from "sonner";

const serverUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

type DeleteDialogeProp = {
  userId: string;
  onDeleted?: () => void;
};

export function DeleteDialoge({ userId, onDeleted }: DeleteDialogeProp) {
  const [isDelete, setDelete] = useState(false);

  const HandleDelete = async () => {
    setDelete(true);

    try {
      await axios.delete(serverUrl + `/user/${userId}`);
      toast.success("User deleted successfully!");
      onDeleted?.();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Failed to delete user");
      } else {
        toast.error("Something went wrong");
      }
    }finally{
      setDelete(false)
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>Delete</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this user?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete user
            account and remove data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500 font-bold hover:bg-red-600" onClick={HandleDelete} disabled={isDelete}>
            {isDelete? "Deleting" : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteDialoge;
