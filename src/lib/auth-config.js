import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

const prisma = new PrismaClient()

const CREDENTIAL_USER_NAME = process.env.CREDENTIAL_USER_NAME;
const CREDENTIAL_USER_EMAIL = process.env.CREDENTIAL_USER_EMAIL;
const CREDENTIAL_USER_PASSWORD = process.env.CREDENTIAL_USER_PASSWORD;
const CREDENTIAL_USER_ROLE = process.env.CREDENTIAL_USER_ROLE;
const GITHUB_CREDENTIAL_USER_ID = process.env.GITHUB_CREDENTIAL_USER_ID

const ADMIN_USER = {
  name: CREDENTIAL_USER_NAME,
  email: CREDENTIAL_USER_EMAIL,
  password: CREDENTIAL_USER_PASSWORD,
  role: CREDENTIAL_USER_ROLE
}

const authOptions = {
  adapter: PrismaAdapter(prisma),
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
          (!user?.id && (user?.email === ADMIN_USER?.email && user?.password === ADMIN_USER?.password)) || // Form Validation
          (user?.id === GITHUB_CREDENTIAL_USER_ID && user?.email === ADMIN_USER?.email) // Github validation
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
    },
    async signIn({ user, account, profile, email, credentials }){
      console.log('signIn({ user, account, profile, email, credentials })')

      console.log(user?.email)

      if(user){
        console.log('entrou no if')
        const findUser = await prisma.user.findUnique({
          where: {
            email: user?.email,
          },
        })
        console.log('findUser')
        console.log(findUser)

        // const user = await prisma.user.create({
        //   data: {
        //     email: 'elsa@prisma.io',
        //     name: 'Elsa Prisma',
        //   },
        // })
      }

      return { user, account, profile, email, credentials }
    }
  }
};

export default authOptions
