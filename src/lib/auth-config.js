import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const CREDENTIAL_USER_NAME = process.env.CREDENTIAL_USER_NAME;
const CREDENTIAL_USER_EMAIL = process.env.CREDENTIAL_USER_EMAIL;
const CREDENTIAL_USER_PASSWORD = process.env.CREDENTIAL_USER_PASSWORD;
const CREDENTIAL_USER_ROLE = process.env.CREDENTIAL_USER_ROLE;

const ADMIN_USER = {
  name: CREDENTIAL_USER_NAME,
  email: CREDENTIAL_USER_EMAIL,
  password: CREDENTIAL_USER_PASSWORD,
  role: CREDENTIAL_USER_ROLE
}

const authOptions = {
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

        if (
          credentials?.email === ADMIN_USER.email &&
          credentials?.password === ADMIN_USER.password
        ) {
          return ADMIN_USER;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({token, user}){
      if(user){
        if(
          user?.email === ADMIN_USER?.email &&
          user?.password === ADMIN_USER?.password
        ){
          token.role = 'admin'
        }else{
          token.role = 'default'
        }
      }
      return token;
    },
    session({session, token}) {
      session.user.role = token.role
      return session
    }
  }
};

export default authOptions
