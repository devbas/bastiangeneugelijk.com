import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

// const ProjectCard = ({ page }) => {
const ProjectCard = ({ node }) => {
  console.log({ node: node  })
  const url = `/${node.slug}/`
  const readingTime = readingTimeHelper(node)

  return (
    <div class="row">
      <Link to={url}>
        <div class="col-md-8 col-md-offset-2 col-xs-12 overview-project">
					<div class="row">
						<div class="col-md-2 col-xs-12 col-sm-2">
							<div class="overview-project-icon concept-project-icon-background">
              </div>
              <div class="visible-xs">
								<div class="overview-project-title h3">
										Public Transport Assistant
								</div>
							</div>
            </div>
            <div class="col-md-10 col-sm-10">
							<div class="overview-project-description-outer-box">
								<div class="row">
									<div class="col-md-8 col-sm-7">
										<div class="pull-left overview-project-title-box hidden-xs">
											<div class="overview-project-title h3">{node.title}</div>
                    </div> 
                    <div class="pull-left overview-project-description-box">
											<div class="overview-project-description">
												<h4 class="overview-project-subtitle light">{node.custom_excerpt}</h4>
                      </div>
										</div>
									</div>
									<div class="col-md-4 col-sm-5">
										<div class="detail-box">
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