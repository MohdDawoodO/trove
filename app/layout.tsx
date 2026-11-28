import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { auth } from "@/server/auth";
import CheckSession from "@/components/check-session";
import { db } from "@/server";
import { users } from "@/server/schema";
import { eq } from "drizzle-orm";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trove | Wishlist Tracker",
  description:
    "A personal space for everything you want, thoughtfully organized and ready for whenever you're.",
};

export const instant = false;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  let userExists: boolean = false;
  const session = await auth();

  if (session) {
    userExists = !!(await db.query.users.findFirst({
      where: eq(users.id, session?.user.id),
    }));
  }

  console.log(session);

  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <div className="mx-auto w-full max-w-7xl">{children}</div>
        {session && <CheckSession userExists={userExists} />}
      </body>
    </html>
  );
}
