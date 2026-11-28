"use client";

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
import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function AuthDialog({
  children,
  secondary,
  className,
}: PropsWithChildren<{ className?: string; secondary?: boolean }>) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            className={className}
            variant={secondary ? "secondary" : "default"}
          >
            {children}
          </Button>
        }
      />
      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">
            Please Sign In to Continue.
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-2">
          <Button
            variant="outline"
            className="w-full gap-3 rounded-full p-5 text-base"
          >
            <FcGoogle className="scale-120" /> Sign In with Google
          </Button>
          <Button
            variant="outline"
            className="w-full gap-3 rounded-full p-5 text-base"
          >
            <FaGithub className="scale-120" /> Sign In with Github
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
