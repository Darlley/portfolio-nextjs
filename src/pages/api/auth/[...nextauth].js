import NextAuth from "next-auth/next";
import authOptions from "./../../../lib/auth-config";

export default NextAuth(authOptions);
