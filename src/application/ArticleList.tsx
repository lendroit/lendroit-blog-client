import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { Link, match } from "react-router-dom";
import "./ArticleList.css";

interface IArticle {
  id: number;
  name: string;
}

const articlesQuery = gql`
  {
    articles {
      id: id
      name: name
      content: content
    }
  }
`;

interface IProps {
  match: match;
}

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

          return data.articles.map(({ name, id }: IArticle) => (
            <div className="Article-container" key={id}>
              <Link
                className="Article-link"
                to={`${this.props.match.url}/${id}`}
              >
                <h3>{`${name}`}</h3>
              </Link>
              <div>
                <time className="time-metadata"> November 8, 2018 </time>
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
