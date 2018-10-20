import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";

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

export class ArticleList extends React.PureComponent {
  public render() {
    return (
      <Query query={articleQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;
          }
          if (error) {
            return <p>Error :(</p>;
          }

          return data.articles.map(({ articleName, articleId }: IArticle) => (
            <div key={articleId}>
              <p>{`${articleName}`}</p>
            </div>
          ));
        }}
      </Query>
    );
  }
}
