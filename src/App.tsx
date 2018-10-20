import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import * as React from "react";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const query = gql`
  {
    articles {
      name
    }
  }
`;

client.query({ query }).then(console.warn);

import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
