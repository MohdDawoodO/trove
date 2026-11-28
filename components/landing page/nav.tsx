"use client";

import { Button } from "@/components/ui/button";
import { DownloadIcon, LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import AuthDialog from "@/components/auth/auth-dialog";

export default function HomeNav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-4 2xl:px-0">
      <h1 className="text-xl font-bold sm:text-2xl">Trove</h1>
      <ul className="flex gap-2">
        <li className="hidden sm:flex">
          <AuthDialog className="group rounded-full sm:rounded-lg" secondary>
            Log In
            <LogInIcon className="duration-200 group-hover:translate-x-0.5 group-hover:scale-95" />
          </AuthDialog>
        </li>
        <li className="sm:hidden">
          <Button className="rounded-full sm:rounded-lg" size="sm">
            Download
            <DownloadIcon />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
