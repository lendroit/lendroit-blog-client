import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import * as ReactMarkdown from "react-markdown";
import { match } from "react-router";
import { getRandomColor } from '../utils/getRandomColor';
import "./Article.css";
import "./github-markdown.css";

const getRandomPadding = () => {
  const padding = Math.floor(Math.random()*500)
  return `${padding}px`
}

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

          return (
            <div className="Article-content" style={{padding: `0 ${getRandomPadding()}`, color: getRandomColor()}}>

                  <ReactMarkdown
                    className="markdown-body"
                    source={data.article.content}
                    />
            </div>
          );
        }}
      </Query>
    );
  }
}
