import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withApollo from '../config/withApollo';
import { log } from 'util';
import { GET_ALL_EMPLOYE } from '../graphql/employe/query';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    // console.log(apollo);
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
