
// base css
import '../client_modules/styles/globals.css';

// the next type for Components
import { AppProps } from 'next/app';

// apollo client 
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { link } from '../client_modules/apollo_client/link';
import { cache } from '../client_modules/apollo_client/cache';


// state management
import Context from '../client_modules/state_mangement/context';
import { useGlobalState } from '../client_modules/state_mangement/useGlabalStateHook';


const client = new ApolloClient({ cache, link })


function MyApp({ Component, pageProps }: AppProps) {

  const store = useGlobalState();

  return (
    <Context.Provider value={store}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp