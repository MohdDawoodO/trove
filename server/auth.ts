import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { accounts, users } from "@/server/schema";
import { db } from "@/server/index";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, { usersTable: users, accountsTable: accounts }),
  session: { strategy: "jwt" },
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Github({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token;

      const dbUser = await db.query.users.findFirst({
        where: eq(users.id, token.sub),
      });

      if (!dbUser) return token;

      token.name = dbUser.name;
      token.email = dbUser.email;
      token.image = dbUser.image;

      return token;
    },
    async session({ token, session }) {
      if (session && token.sub) {
        session.user.id = token.sub;
      }

      if (session.user) {
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string;
      }

      return session;
    },
  },
});
