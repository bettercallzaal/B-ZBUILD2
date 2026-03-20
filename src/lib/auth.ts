import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      if (!profile?.login) return false;

      // Only allow sign-in if the GitHub username matches an admin member
      const members = await prisma.member.findMany({
        where: { role: "admin" },
      });

      const isAdmin = members.some((member) => {
        const links = member.platformLinks as Record<string, string>;
        return links.github?.toLowerCase() === profile.login?.toLowerCase();
      });

      return isAdmin;
    },

    async jwt({ token, profile }) {
      if (profile?.login) {
        token.githubUsername = profile.login;
      }
      return token;
    },

    async session({ session, token }) {
      const githubUsername = token.githubUsername as string | undefined;
      if (githubUsername) {
        const members = await prisma.member.findMany({
          where: { role: "admin" },
        });

        const member = members.find((m) => {
          const links = m.platformLinks as Record<string, string>;
          return (
            links.github?.toLowerCase() === githubUsername.toLowerCase()
          );
        });

        if (member) {
          session.user.memberId = member.id;
          session.user.role = member.role;
          session.user.slug = member.slug;
        }
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
