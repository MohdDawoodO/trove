"use client";

import { Button } from "@/components/ui/button";
import { DownloadIcon, LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomeNav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Trove</h1>
      <ul className="flex gap-2">
        <li className="hidden sm:flex">
          <Button
            variant="secondary"
            className="group rounded-full sm:rounded-lg"
            onClick={() => router.push("/auth/login")}
          >
            Log In
            <LogInIcon className="duration-200 group-hover:translate-x-0.5 group-hover:scale-95" />
          </Button>
        </li>
        <li>
          <Button className="group rounded-full sm:rounded-lg">
            Download
            <DownloadIcon className="duration-200 group-hover:translate-y-0.5 group-hover:scale-95" />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
