import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const urlServer = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

type User = {
  id: string;
  name: string;
  email: string;
};

type EditUserProps = {
  userId: string;
  onEdited?: (updatedUser: User) => void;
};

export function DialogEditUser({ userId, onEdited }: EditUserProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(urlServer + `/user/${userId}`)
      .then((res) => {
        (setEmail(res.data.email), setName(res.data.name));
      })
      .catch(() => toast.error("Fieled to loade user"));
  }, [userId]);

  const HandleEditUser = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await axios.patch(urlServer + `/user/${userId}`, {
        email,
        name,
      });
      toast.success("User updated succesfully!");
      const updatedUser = res.data as User;
      onEdited?.(updatedUser);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Failed to delete user");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-indigo-400 text-white hover:bg-indigo-700 hover:text-white font-bold"
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={HandleEditUser}>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Make changes to user profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input
                id="name-1"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="bg-red-500 text-white font-bold hover:text-white hover:bg-red-700"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-indigo-500 text-white hover:bg-indigo-700 hover:text-white font-bold"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
