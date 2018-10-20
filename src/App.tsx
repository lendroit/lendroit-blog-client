import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import "./App.css";

import { ArticleList } from "./application/ArticleList";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "localhost:3000"
    : "https://lendroit-blog.herokuapp.com";

const lendroitBlogGQPClient = new ApolloClient({
  uri: `${baseUrl}/graphql`
});

const query = gql`
  {
    articles {
      name
    }
  }
`;

lendroitBlogGQPClient.query({ query }).then(console.warn);

import logo from "./rubber-duck-icon.png";

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={lendroitBlogGQPClient}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to LEndroit</h1>
          </header>
          <ArticleList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
