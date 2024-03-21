import PropTypes from 'prop-types'
import { Raleway } from 'next/font/google'
import '../styles/styles.css'

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

const defaultFont = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  
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
      <Component {...pageProps} />
    </>
  )  
}