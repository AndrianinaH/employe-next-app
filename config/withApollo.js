import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import config from './config';

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: config.serverUri,
      cache: new InMemoryCache().restore(initialState || {})
    })
);
