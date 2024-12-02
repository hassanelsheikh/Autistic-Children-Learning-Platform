import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createChild, existingUser, getAge } from "@app/_lib/data_service";
import { trackSynchronousPlatformIOAccessInDev } from "next/dist/server/app-render/dynamic-rendering";
// Define the User type with the age property

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      // if there is a user-> authorize, otherwise not
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingChild = await existingUser(user.email);

        if (!existingChild)
          await createChild({ email: user.email, fullName: user.name });
        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const age = await getAge(session.user.email);
      session.user.age = age;
      console.log(age);
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
