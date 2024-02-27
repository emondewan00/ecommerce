import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(credentials, "auth.js file credentials");
        const user = {
          id: 1,
          name: "J Smith",
          email: "qgUeh@example.com",
          role: "user",
        };
        return {
          id: 1,
          name: "J Smith",
          email: "qgUeh@example.com",
          role: "user",
        };
      },
    }),
  ],
  //   session: {
  //     jwt: true,
  //   },
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true;
    // },
    async redirect({ url, baseUrl }) {
      return url;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, user, token }) {
      session.user.role = token?.user?.role;
      return session;
    },
  },
});
