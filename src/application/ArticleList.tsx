import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { Link, match } from "react-router-dom";
import { getDisplayDate } from "../utils/getDisplayDate";
import { getRandomColor } from "../utils/getRandomColor";
import "./ArticleList.css";

interface IArticle {
  id: number;
  name: string;
  createdAt: string;
}

interface IProps {
  match: match;
}

const articlesQuery = gql`
  {
    articles {
      id: id
      name: name
      content: content
      createdAt: createdAt
    }
  }
`;

export class ArticleList extends React.PureComponent<IProps> {
  public render() {
    return (
      <Query query={articlesQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;
          }
          if (error) {
            return <p>Error :(</p>;
          }

          return data.articles.map(
            ({ name, id, createdAt }: IArticle, index: number) => (
              <Link
                key={id}
                className="Article-container"
                style={{
                  backgroundColor: getRandomColor(),
                  flexDirection: index % 2 ? "row" : "row-reverse"
                }}
                to={`${this.props.match.url}/${id}`}
              >
                <div className="Article-semi-container" />
                <div className="Article-semi-container">
                  <div
                    className="Article-name"
                    style={{ color: getRandomColor() }}
                  >
                    <span>{`${name}`}</span>
                  </div>
                  <time className="time-metadata" style={{ display: "none" }}>
                    {getDisplayDate(createdAt)}
                  </time>
                </div>
              </Link>
            )
          );
        }}
      </Query>
    );
  }
}
