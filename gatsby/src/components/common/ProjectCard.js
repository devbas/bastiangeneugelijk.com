import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

// const ProjectCard = ({ page }) => {
const ProjectCard = ({ node, key }) => {
  console.log({ node: node  })
  const url = `/${node.slug}/`
  const readingTime = readingTimeHelper(node)

  return (
    <div className="row" key={key}>
      <Link to={url}>
        <div className="col-md-8 col-md-offset-2 col-xs-12 overview-project">
					<div className="row">
						<div className="col-md-2 col-xs-12 col-sm-2">
							<div className="overview-project-icon concept-project-icon-background">
              </div>
              <div className="visible-xs">
								<div className="overview-project-title h3">
										Public Transport Assistant
								</div>
							</div>
            </div>
            <div className="col-md-10 col-sm-10">
							<div className="overview-project-description-outer-box">
								<div className="row">
									<div className="col-md-8 col-sm-7">
										<div className="pull-left overview-project-title-box hidden-xs">
											<div className="overview-project-title h3">{node.title}</div>
                    </div> 
                    <div className="pull-left overview-project-description-box">
											<div className="overview-project-description">
												<h4 className="overview-project-subtitle light">{node.custom_excerpt}</h4>
                      </div>
										</div>
									</div>
									<div className="col-md-4 col-sm-5">
										<div className="detail-box">
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

export default ProjectCard