import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export const instant = false;

export default async function AppPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return <div>Welcome back, {session.user?.name}</div>;
}
