import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authConfig";
import { connectDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    console.log("credentials:", credentials);
    await connectDB();
    const user = await User.findOne({ username: credentials.username });
    console.log("user1:", user);

    if (!user) throw new Error("There is no user");
    // const isPasswordCorrect = await bcrypt.compare(
    //   credentials.password,
    //   user.password
    // );
    const isPasswordCorrect = credentials.password === user.password;
    console.log("isPasswordCorrect:", isPasswordCorrect);
    if (!isPasswordCorrect) throw new Error("Password Incorrect");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks:{
    async jwt({token, user}){
      if(user){
        token.username = user.username;
        token.img = user.img;
      }
      return token
    },

    async session({session, token}){
      if(token){
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session
    },
  }
});
