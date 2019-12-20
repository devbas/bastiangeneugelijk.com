import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/screen.css'
import '../../styles/bootstrap.min.css'
import '../../styles/highlightjs-tomorrow-night-blue.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
  const site = data.allGhostSettings.edges[0].node

  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet>

      <div className="viewport">

        <div className="viewport-top">
          {!isHome &&
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
                          <div className="header-profile-small-title"><a href="/">Bastian Geneugelijk</a></div>
                          <div className="header-profile-small-description">I am a maker of digital products currently living in Amsterdam.<br />As a data scientist with originally an interaction design background,<br />I enjoy working with machine learning data problems that require human input.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          }

          <main className="site-main">
            {/* All the main content gets inserted here, index.js, post.js */}
            {children}
          </main>

        </div>

        <div className="viewport-bottom">
          {/* The footer at the very bottom of the screen */}
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="connect-intro">
                <h3>Connect</h3><br/>
                <button><a href="mailto:bastiangeneugelijk@me.com">Send me an email</a></button>
                <a href="https://twitter.com/BGeneugelijk"><div className="twitter-icon"></div></a>
              </div>
            </div>
          </div>
          
          <footer></footer>

        </div>
      </div>

    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
  <StaticQuery
    query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
    render={data => <DefaultLayout data={data} {...props} />}
  />
)

export default DefaultLayoutSettingsQuery
