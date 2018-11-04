import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { Link, match } from "react-router-dom";
import "./ArticleList.css";

interface IArticle {
  articleName: string;
  articleId: number;
}

const articleQuery = gql`
  {
    articles {
      articleId: id
      articleName: name
    }
  }
`;

interface IProps {
  match: match;
}

export class ArticleList extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className="main-content-wrap">
        <Query query={articleQuery}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>;
            }
            if (error) {
              return <p>Error :(</p>;
            }

            return data.articles.map(({ articleName, articleId }: IArticle) => (
              <div className="Article-container" key={articleId}>
                <Link
                  className="Article-link"
                  to={`${this.props.match.url}/${articleId}`}
                >
                  <h3>{`${articleName}`}</h3>
                </Link>
                <div>
                  <time className="time-metadata"> November 8, 2018 </time>
                </div>
                <img
                  className="Article-image"
                  src="https://picsum.photos/600/200/?random"
                  alt=""
                />
              </div>
            ));
          }}
        </Query>
      </div>
    );
  }
}
