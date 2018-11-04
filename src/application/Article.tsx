import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import * as ReactMarkdown from "react-markdown";
import { match } from "react-router";

const articleQuery = gql`
  query GetArticleById($articleId: Int!) {
    article(id: $articleId) {
      id: id
      name: name
      content: content
    }
  }
`;

interface IProps {
  match: match<{ id: string }>;
}
export class Article extends React.PureComponent<IProps> {
  public render() {
    return (
      <Query
        query={articleQuery}
        variables={{ articleId: +this.props.match.params.id }}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;
          }
          if (error) {
            return <p>Error :(</p>;
          }

          return <ReactMarkdown source={data.article.content} />;
        }}
      </Query>
    );
  }
}
