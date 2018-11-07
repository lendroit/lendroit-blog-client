import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import "./App.css";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import { Article } from "./application/Article";
import { ArticleList } from "./application/ArticleList";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
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

import { Home } from "./application/pages/Home";
import logo from "./lendroit-duck.jpeg";

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={lendroitBlogGQPClient}>
        <div className="App">
          <Router basename={`${process.env.PUBLIC_URL}/#`}>
            <div>
              <nav>
                <header className="App-header">
                  <Link to="/articles" >
                    <img src={logo} className="App-logo" alt="logo" />
                  </Link>
                  <Link to="/articles" >
                    <img src={logo} className="App-logo" style={{animationDelay: '2s'}} alt="logo" />
                  </Link>
                  <Link to="/articles" >
                    <img src={logo} className="App-logo" style={{animationDelay: '4s'}} alt="logo" />
                  </Link>
                </header>
              </nav>

              <div className="App-content-wrap">
                <Route path="/" exact={true} component={Home} />
                <Route path="/articles" exact={true} component={ArticleList} />
                <Route path={"/articles/:id"} component={Article} />
              </div>
            </div>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
