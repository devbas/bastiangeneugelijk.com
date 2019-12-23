import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Prism from "prismjs"
require("prismjs/components/prism-sql")
// import SQL from "prism-sql"
// require('prismjs/components/prism-sql.js')
// const loadLanguages = require('prismjs/components/index')
// loadLanguages(['sql'])

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

import '../styles/prism.css'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
class Post extends React.Component {

  constructor(props) {
    super(props) 
    console.log({ props: props })
  }

  componentDidMount() {
    const tags = this.props.data.ghostPost.tags

    if(tags.some(tag => tag.slug === 'code')) {
      Prism.highlightAll()
    }
  }

  render() {
    const post = this.props.data.ghostPost 
    const tags = post.tags

    return (
      <>
        <MetaData
          data={post.data}
          location={this.props.location}
          type="article"
        />
        <Layout>
          <article className="single-project-text">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-1 col-md-10 col-xs-12">
                  <div className="pull-left full-width">
                    <div className="single-project-title"><h1>{post.title}</h1></div>
                    <div className="date"><time dateTime={post.published_at}>{post.published_at_pretty}</time></div>
                    <section
                      className="content-body load-external-scripts"
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                  </div>
                </div>
              </div>
              <script type="text/javascript">
              </script> 
            </div>
          </article>
        </Layout>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
