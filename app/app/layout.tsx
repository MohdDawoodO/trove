import { PropsWithChildren } from "react";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function AppLayout({ children }: PropsWithChildren) {
  const session = await auth();
  if (!session) redirect("/");

  return children;
}
