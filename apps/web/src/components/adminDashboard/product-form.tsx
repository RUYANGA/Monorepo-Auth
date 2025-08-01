import React from "react";
import { ReusableDialog } from "../dialoge-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function ProductFormDialog() {
  return (
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
  );
}
