import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { bootstrapFounderAccess } from "@/lib/bootstrap";
import { getServerEnv } from "@/lib/env";
import { prisma } from "@/lib/prisma";

const env = getServerEnv();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: env.AUTH_SECRET,
  session: {
    strategy: "database",
  },
  trustHost: true,
  providers: [
    GitHub({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
  events: {
    async createUser({ user }) {
      if (user.email) {
        await bootstrapFounderAccess(user.id, user.email);
      }
    },
    async signIn({ user }) {
      if (user.email) {
        await bootstrapFounderAccess(user.id, user.email);
      }
    },
  },
});
