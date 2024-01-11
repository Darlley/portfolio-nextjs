import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const username = process.env.CREDENTIAL_USER_NAME;
const email = process.env.CREDENTIAL_USER_EMAIL;
const password = process.env.CREDENTIAL_USER_PASSWORD;
const role = process.env.CREDENTIAL_USER_ROLE;
const id = process.env.CREDENTIAL_USER_ID;

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Endereço de e-mail",
          type: "email",
          placeholder: "Seu email",
        },
        password: {
          label: "Senha",
          type: "password"
        },
      },
      async authorize(credentials, req) {
        const user = {
          id,
          name: username,
          email,
          role
        }

        console.log("chamou o user", username)

        if (
          email === credentials?.email && password === credentials?.password
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
