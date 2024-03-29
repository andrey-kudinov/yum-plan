import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
// import GoogleProvider from 'next-auth/providers/github'
// import MailRuProvider from 'next-auth/providers/github'
// import VkProvider from 'next-auth/providers/github'
// import YandexProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // }),

    // MailRuProvider({
    //   clientId: process.env.MAILRU_CLIENT_ID,
    //   clientSecret: process.env.MAILRU_CLIENT_SECRET
    // }),

    // VkProvider({
    //   clientId: process.env.VK_CLIENT_ID,
    //   clientSecret: process.env.VK_CLIENT_SECRET
    // }),

    // YandexProvider({
    //   clientId: process.env.YANDEX_CLIENT_ID,
    //   clientSecret: process.env.YANDEX_CLIENT_SECRET
    // })
  ],

  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)