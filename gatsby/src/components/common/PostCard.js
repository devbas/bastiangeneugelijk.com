import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
  const url = `/${post.slug}/`
  const readingTime = readingTimeHelper(post)

  return (
    <div className="row">
      <Link to={url}>
        <div className="col-md-8 col-md-offset-2 col-xs-12 overview-blog">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="overview-blog-description-outer-box">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="pull-left overview-blog-title-box full-width">
                      <div className="overview-blog-title h3 left">{post.title}</div>
                    </div>
                    <div className="pull-left overview-blog-meta full-width">
                      <div className="date"><time dateTime={post.published_at}>{post.published_at_pretty}</time></div>
                    </div>
                    <div className="pull-left overview-project-description-box">
                      <div className="overview-blog-description">
                        <h4 className="overview-project-subtitle light">{post.custom_excerpt}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default PostCard
