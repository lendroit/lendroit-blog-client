import * as React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export class Home extends React.PureComponent {
  public render() {
    return (
      <Link className="Home" to="/articles">
        <h1 className="App-title">Go to blog</h1>
      </Link>
    );
  }
}
