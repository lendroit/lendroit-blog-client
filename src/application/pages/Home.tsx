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
        <Link to="/lifestyle">
          <h3>lifestyle</h3>
        </Link>
      </React.Fragment>
    );
  }
}
