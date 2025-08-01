import React from "react";
import { SidebarInset } from "../ui/sidebar";
import { ReusableDialog } from "../dialoge-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import UserData from "./user-data";

function UserFormInput() {
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
          <UserData />
        </div>
      </div>
    </SidebarInset>
  );
}

export default UserFormInput;
