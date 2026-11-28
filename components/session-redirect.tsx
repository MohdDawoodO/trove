"use client";

import { Session } from "next-auth";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function SessionRedirect({
  session,
}: {
  session: Session | null;
}) {
  useEffect(() => {
    if (!session) return;

    if (window.innerWidth > 640) {
      redirect("/app");
    }
  }, [session]);

  return null;
}
