import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { BrowserView, MobileView } from "react-device-detect";
import { Link, match } from "react-router-dom";
import { getDisplayDate } from "../utils/getDisplayDate";
import { getRandomColor } from "../utils/getRandomColor";
import { getRandomIcon } from "../utils/getRandomIcon";
import "./ArticleList.css";
import "./icomoonStyle.css";

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
            return <p>Don't look. croute.</p>;
          }
          if (error) {
            return <p>Error :(</p>;
          }

          return data.articles.map(
            ({ name, id, createdAt }: IArticle, index: number) => {
              const textColor = getRandomColor();
              return (
                <div key="croute">
                  <BrowserView>
                    <Link
                      key={id}
                      className="Article-container"
                      style={{
                        backgroundColor: getRandomColor(),
                        flexDirection: index % 2 ? "row" : "row-reverse",
                        height: 400
                      }}
                      to={`${this.props.match.url}/${id}`}
                    >
                      <div className="Article-semi-container">
                        <span
                          style={{ fontSize: "10em", color: textColor }}
                          className={getRandomIcon()}
                        />
                      </div>
                      <div className="Article-semi-container">
                        <div
                          className="Article-name"
                          style={{ color: textColor }}
                        >
                          <span>{`${name}`}</span>
                        </div>
                        <time
                          className="time-metadata"
                          style={{ display: "none" }}
                        >
                          {getDisplayDate(createdAt)}
                        </time>
                      </div>
                    </Link>
                  </BrowserView>
                  <MobileView>
                    <Link
                      key={id}
                      className="Article-container"
                      style={{
                        backgroundColor: getRandomColor(),
                        flexDirection: index % 2 ? "row" : "row-reverse"
                      }}
                      to={`${this.props.match.url}/${id}`}
                    >
                      <div>
                        <div
                          className="Article-name-mobile"
                          style={{
                            color: textColor,
                            fontSize: "3em",
                            textAlign: "center"
                          }}
                        >
                          <span>{`${name}`}</span>
                        </div>
                        <div
                          style={{
                            color: textColor,
                            fontSize: "4em",
                            textAlign: "center"
                          }}
                          className={getRandomIcon()}
                        />
                        <time
                          className="time-metadata"
                          style={{ display: "none" }}
                        >
                          {getDisplayDate(createdAt)}
                        </time>
                      </div>
                    </Link>
                  </MobileView>
                </div>
              );
            }
          );
        }}
      </Query>
    );
  }
}
