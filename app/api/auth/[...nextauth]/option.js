import CredentialsProvider from "next-auth/providers/credentials";
export const authOption = {
  secret: process.env.AUTH_SECRET,
  page: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const user = {
          id: 1,
          name: "J Smith",
          email: "qgUeh@example.com",
          role: "user",
        };
        credentials.role = "user";
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      return token;
    },
    async session({ session, token, user }) {
      session.user = user;
      return session;
    },
  },
};
