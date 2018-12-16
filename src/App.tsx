import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import { Article } from "./application/Article";
import { ArticleList } from "./application/ArticleList";
import { Home } from "./application/pages/Home";
import { Lifestyle } from "./application/pages/Lifestyle";
import logo from "./lendroit-duck.jpeg";

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

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={lendroitBlogGQPClient}>
        <div className="App">
          <Router basename={`${process.env.PUBLIC_URL}/#`}>
            <div>
              <nav>
                <BrowserView>
                  <header className="App-header">
                    <Link to="/articles">
                      <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    <Link to="/articles">
                      <img
                        src={logo}
                        className="App-logo"
                        style={{ animationDelay: "2s" }}
                        alt="logo"
                      />
                    </Link>
                    <Link to="/articles">
                      <img
                        src={logo}
                        className="App-logo"
                        style={{ animationDelay: "4s" }}
                        alt="logo"
                      />
                    </Link>
                  </header>
                </BrowserView>
                <MobileView>
                  <header className="App-header" style={{ display: "flex" }}>
                    <Link to="/articles">
                      <img src={logo} className="App-logo-mobile" alt="logo" />
                    </Link>
                  </header>
                </MobileView>
              </nav>

              <div className="App-content-wrap">
                <Route path="/" exact={true} component={Home} />
                <Route path="/articles" exact={true} component={ArticleList} />
                <Route path="/lifestyle" exact={true} component={Lifestyle} />
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
