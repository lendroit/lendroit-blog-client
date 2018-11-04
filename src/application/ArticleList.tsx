import gql from "graphql-tag";
import { DateTime } from "luxon";
import * as React from "react";
import { Query } from "react-apollo";
import { Link, match } from "react-router-dom";
import "./ArticleList.css";

interface IArticle {
  id: number;
  name: string;
  createdAt: string;
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

interface IProps {
  match: match;
}

const articleCreatedAt = (createdAt: string) => {
  console.log(createdAt);
  const displayDate = DateTime.fromMillis(parseInt(createdAt, 0)).toFormat(
    "dd MMMM, yyyy"
  );
  return displayDate;
};

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

          return data.articles.map(({ name, id, createdAt }: IArticle) => (
            <div className="Article-container" key={id}>
              <Link
                className="Article-link"
                to={`${this.props.match.url}/${id}`}
              >
                <h3>{`${name}`}</h3>
              </Link>
              <div>
                <time className="time-metadata">
                  {articleCreatedAt(createdAt)}
                </time>
              </div>
              <img
                className="Article-image"
                src={`https://picsum.photos/600/200/?image=${Math.floor(
                  id * Math.random() * 100
                )}`}
                alt=""
              />
            </div>
          ));
        }}
      </Query>
    );
  }
}
