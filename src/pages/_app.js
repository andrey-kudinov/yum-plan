import { SessionProvider } from 'next-auth/react'
import { Raleway } from 'next/font/google'
import StateProvider from '@/providers/stateContext'
import '../styles/global.css'

const defaultFont = Raleway({ subsets: ['latin'] })

export default function App({
  Component,
  pageProps: {session, ...pageProps}
}) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${defaultFont.style.fontFamily};
        }
        
        #__next {
          height: 100%;
        }
      `}</style>
      <SessionProvider session={session}>
        <StateProvider><Component {...pageProps} /></StateProvider>
      </SessionProvider>
    </>
  )  
}