import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: '/signin'
  },
  secret: process.env.NEXTAUTH_SECRET
})