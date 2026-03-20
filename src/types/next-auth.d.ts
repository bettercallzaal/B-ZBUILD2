import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      memberId?: string;
      role?: string;
      slug?: string;
    } & DefaultSession["user"];
  }

  interface Profile {
    login?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    githubUsername?: string;
  }
}
