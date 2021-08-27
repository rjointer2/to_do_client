
// base css
import '../client_modules/styles/globals.css';

// the next type for Components
import { AppProps } from 'next/app';

// apollo client 
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { link } from '../client_modules/apollo_client/link';
import { cache } from '../client_modules/apollo_client/cache';


const client = new ApolloClient({ cache, link })



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
