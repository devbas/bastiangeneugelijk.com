import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

import { PublicTransportAssistant, ClassificationTheory } from '../content/'

import '../styles/animate.css'

/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/
const Page = ({ data, location }) => {
  const page = data.ghostPage
  const tags = data.ghostPage.tags

  return (
    <>
      <MetaData
        data={data}
        location={location}
        type="website"
      />

      {tags.some(tag => tag.slug === 'public_transport_assistant') &&
        <PublicTransportAssistant 
          html={page.html} 
          title={page.title} 
        />
      }

      {tags.some(tag => tag.slug === 'classification_theory') &&
        <ClassificationTheory
          html={page.html}
          title={page.title}
        />
      }

      {!tags.some(tag => tag.slug === 'public_transport_assistant') && !tags.some(tag => tag.slug === 'classification_theory') &&
        <>
          <Helmet>
            <style type="text/css">{`${page.codeinjection_styles}`}</style>
          </Helmet>
          <Layout>
            <article className="single-project-text">
              <div className="container">
                <div className="row">
                  <div className="col-md-offset-2 col-md-8 col-xs-12">
                    <div className="pull-left full-width">
                      <div className="single-project-title full-width">
                        <section
                          className="content-body load-external-scripts"
                          dangerouslySetInnerHTML={{ __html: page.html }}
                        />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Layout>
        </>
      }
    </>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      tags: PropTypes.array
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
    }
`
