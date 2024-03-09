import PropTypes from 'prop-types'

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
