import * as React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export class Home extends React.PureComponent {
  public render() {
    return (
      <React.Fragment>
        <Link to="/articles">
          <h3>articles</h3>
        </Link>
        <a href="https://www.instagram.com/lendro.it/">
          <h3>lifestyle</h3>
        </a>
      </React.Fragment>
    );
  }
}
