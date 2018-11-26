import * as React from "react";
import { Redirect } from "react-router-dom";
import "./Home.css";

export class Home extends React.PureComponent {
  public render() {
    return <Redirect to="/articles" />;
  }
}
