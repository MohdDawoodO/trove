"use client";

import { signOut } from "next-auth/react";

export default function HandleSignOut({ userExists }: { userExists: boolean }) {
  if (!userExists) signOut({ redirectTo: "/" });
  return null;
}
