"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ReusableDialogProps = {
  title: string;
  description?: string;
  firstButton:string;
  secondButton:string;
  triggerText: string;
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function ReusableDialog({
  title,
  description,
  triggerText,
  firstButton,
  secondButton,
  children,
  onSubmit,
}: ReusableDialogProps) {
  return (
    <Dialog >
      <form onSubmit={onSubmit}>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-indigo-500 text-white font-extrabold text-2xl p-5 shadow-lg hover:bg-indigo-700 hover:text-white">{triggerText}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>

          <div className="grid gap-4">{children}</div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button" className="bg-red-600 font-bold text-white hover:bg-red-700 hover:text-white">
                {firstButton}
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-indigo-500 font-bold hover:bg-indigo-700">{secondButton}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
