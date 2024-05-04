import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/lib/prisma'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt'
  },

  adapter: PrismaAdapter(prisma),

  pages: {
    signIn: '/signin',
  },

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) token.id = profile.id
      return token
    },
    
    async session({ session, token }) {
      const { name, image } = await prisma.user.findUnique({
        where: { id: token.sub },
      })
      session.user.name = name
      session.user.image = image
      
      return session
    }
  }
}

export default NextAuth(authOptions)