import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
  const post = data.ghostPost
  const tags = data.ghostPost.tags 
  console.log({ post: post })
  //         <style type="text/css">{`${post.codeinjection_styles}`}</style>
  // {/* <script src="/js/highlight.pack.js"></script> */}
  //           <link type="text/css" href="/css/highlightjs-tomorrow-night-blue.css" rel='stylesheet'/>
  return (
    <>
      <MetaData
        data={data}
        location={location}
        type="article"
      />
      {tags.some(tag => tag.slug === 'code') &&
        <Helmet>
          <style type="text/css">
            @import '/css/highlightjs-tomorrow-night-blue.css'
          </style>
          {/* <script src="/js/highlight.pack.js" defer></script> */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/prism.min.js" integrity="sha256-NFZVyNmS1YlmiklazBA+TALYJlJtZj/y/i/oADk6CVE=" crossorigin="anonymous"></script>
          {/* <script>hljs.initHighlightingOnLoad();</script> */}
        </Helmet>
      }
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-10 col-xs-12">
              <div className="pull-left full-width">
                <article className="single-project-text">
                  <div className="single-project-title"><h1>{post.title}</h1></div>
                  <div className="date"><time dateTime={post.published_at}>{post.published_at_pretty}</time></div>
                  <section
                    className="content-body load-external-scripts"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
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
