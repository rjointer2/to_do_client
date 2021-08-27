
// base css
import '../client_modules/styles/globals.css';

// the next type for Components
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
