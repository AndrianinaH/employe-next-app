import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo-hooks';
import withApollo from '../config/withApollo';

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
