
// base css
import '../client_modules/styles/globals.css';

// the next type for Components
import { AppProps } from 'next/app';

// apollo client 
import client from '../client_modules/apollo_client/configs/client';
import { ApolloProvider } from '@apollo/client';


// state management
import Context from '../client_modules/state_mangement/context';
import { useGlobalState } from '../client_modules/state_mangement/useGlabalStateHook';






function MyApp({ Component, pageProps }: AppProps) {

  const store = useGlobalState();

  return (
    <ApolloProvider client={client}>
      <Context.Provider value={store}>
        <Component {...pageProps} />
      </Context.Provider>
    </ApolloProvider>
  )
}

export default MyApp