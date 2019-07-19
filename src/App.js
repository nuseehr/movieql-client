import React, { Component } from 'react';
import Home from './Home';
import Detail from './Detail';
import client from './Apollo/Client';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/details/:movieId"} component={Detail} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
