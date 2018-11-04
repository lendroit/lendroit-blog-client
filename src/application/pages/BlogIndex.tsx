import * as React from "react";
import Helmet from "react-helmet";
import ArticlePreview from "../components/ArticlePreview";
import "./blog.module.css";

class BlogIndex extends React.Component {
  public render() {
    const siteTitle = "L'Endroit Blog";
    const posts: any[] = [{ key: "route" }];

    return (
      <div style={{ background: "#fff" }}>
        <Helmet title={siteTitle} />
        <div className="hero">Blog</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default BlogIndex;
