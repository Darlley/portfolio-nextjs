import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {

    if(
      req.nextUrl.pathname === '/dashboard' &&
      req.nextauth.token?.role !== 'admin'

      && req.nextauth.token?.role !== 'default' // retire se quiser impedir de qualquer usuário de logar se não for admin
    ){
      return NextResponse.rewrite(new URL("/unauthorized", req.url))
    }
  },
  {
    callbacks: {
      authorized({token}) {
        return !!token;
      },
    }
  }
)

export const config = { matcher: ["/dashboard"] }
