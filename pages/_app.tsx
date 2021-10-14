
// base css
import '../client_modules/styles/globals.css';

// the next type for Components
import { AppProps } from 'next/app';

// apollo client 
import client from '../client_modules/apollo_client/configs/client';
import { ApolloProvider } from '@apollo/client';
import { GlobalState } from '../client_modules/hooks/useGlobalStateHook';



function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={client}>
      <GlobalState>
        <Component {...pageProps} />
      </GlobalState>
    </ApolloProvider>
  )
}

export default MyApp