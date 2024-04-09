import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export function middleware(request) {
  if (request.nextUrl.pathname === '/signin') {
    return NextResponse.next()
  }

  return withAuth({
    pages: {
      signIn: '/signin'
    },
    secret: process.env.NEXTAUTH_SECRET
  })(request)
}

export const config = {
  matcher: ['/']
}