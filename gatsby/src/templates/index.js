import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

import { MetaData } from "../components/common/meta";
import { ProjectCard } from "../components/common";

const Index = ({ data, location, pageContext }) => {
  const projects = data.allGhostPage.edges
  
  return (
    <>
      <MetaData location={location} />
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-xs-12">
              <div className="pull-left">
                <div className="header-profile">
                </div>
              </div>
              <div className="pull-left">
                <div className="header-title">
                  <h1 className="primary">Bastian Geneugelijk</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="header-intro">
                <h3 className="light">I am a maker of digital products currently living in Amsterdam.<br/><br/>
                  As a data scientist with originally an interaction design background,<br/>I enjoy working with machine learning data problems that require human input.</h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="coffee-table">
        <div className="container">

          <div className="row">
            <Link to="/blog">
              <div className="col-md-8 col-md-offset-2 col-xs-12 blog-banner-outerbox">
                <div className="blog-banner-box">
                  <div className="row">
                    <div className="col-md-9 col-sm-9">
                      <div className="content">
                        <p>Recently, I started to share some of my technical implementations and prototypes.</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <div className="cta">
                        <div className="text">THE BLOG</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {projects.map(({ node }) => (
            <ProjectCard node={node} key={node.id}/>
          ))}

          {/* <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="connect-intro">
                <h3>Connect</h3><br/>
                <button><a href="mailto:bastiangeneugelijk@me.com">Send me an email</a></button>
                <a href="https://twitter.com/BGeneugelijk"><div className="twitter-icon"></div></a>
              </div>
            </div>
          </div> */}

        </div>
      </section>
    </>
  )
};

export default Index;

export const pageQuery = graphql`
  query GhostProjectQuery {
    allGhostPage(filter: {tags: {elemMatch: {slug: {eq: "project"}}}}) {
      edges {
        node {
          ...GhostPageFields
        }
      }
    }
  }
`;