
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout, PostCard, Pagination } from "../components/common";
import { MetaData } from "../components/common/meta";

/**
 * Main index page (blog page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Blog = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;

  return (
    <>
      <MetaData location={location} />
      <header className="project-page">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-xs-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="pull-left">
                    <a href="/">
                      <div className="header-profile-small"></div>
                    </a>
                  </div>
                  <div className="pull-left header-profile-small-text">
                    <div className="header-profile-small-title">
                      <a href="/">Bastian Geneugelijk</a>
                    </div>
                    <div className="header-profile-small-description">
                      I am a maker of digital products
                      currently living in Amsterdam.<br />
                      As a data scientist with originally
                      an interaction design background,<br />
                      I enjoy working with machine
                      learning data problems that require
                      human input.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="coffee-table">
        <div className="container">
          {posts.map(({ node }) => (
            <PostCard key={node.id} post={node} />
          ))}
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="connect-intro">
              <h3>Connect</h3><br/>
              <button><a href="mailto:bastiangeneugelijk@me.com">Send me an email</a></button>
              <a href="https://twitter.com/BGeneugelijk"><div className="twitter-icon"></div></a>
            </div>
          </div>
        </div>
      </div>

      {/* <Layout isHome={true}>
        <div className="container">
          <section className="post-feed">
            {posts.map(({ node }) => (
              // The tag below includes the markup for each post - components/common/PostCard.js
              <PostCard key={node.id} post={node} />
            ))}
          </section>
          <Pagination pageContext={pageContext} />
        </div>
      </Layout> */}
    </>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  pageContext: PropTypes.object
};

export default Blog;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
    query GhostPostQuery($limit: Int!, $skip: Int!) {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
    }
`;
