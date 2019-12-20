import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const PublicTransportAssistant = ({ html, title }) => {
  return (
    <>
      <Helmet>
        
        <script src="/js/turf.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
	      <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v0.48.0/mapbox-gl.js"></script>
        <link href="/css/ovassistant.css" rel='stylesheet' />
	      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.48.0/mapbox-gl.css" rel='stylesheet' />
        <script src="/js/svg4everybody.js"></script>
        <script>svg4everybody(); // run it now or whenever you are ready</script>
        <script src="/js/lodash.min.js"></script>
	      <script src="/js/moment.min.js"></script>
        
        <script src="/js/publictransport.js" defer/> 
      </Helmet>

      <div className="map-visualization-box lg-mg-top" id="map-visualization-box">
        <div id="phone">
          <div id="screen">
          </div>
        </div>
        <div id="map"></div>
        <div id="map-overlay-start">
          {/* <div className="outer-click-box" id="visualization-start" onClick={onVisualizationStart()}> */}
          <div className="outer-click-box" id="visualization-start">
            <div className="inner-border-box">
              <div className="inner-box" id="visualization-start-content">
                <div className="visualization-loading"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container single-project-section-left ov-visualization-bump">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-xs-12">
            <div className="pull-left">
              <div className="single-project-text">
                In addition to updating a travelers journey in case of disruptions, there are many other things we can do with this functionality. For example, an automated message can be sent as soon as the traveler experiences a disruption. A full overview of the possible use cases I could think of so far is listed below.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container single-project-grid">
        <div className="row">
          <div className="col-md-4 first-cell cell cell-border-bottom">
            <div className="image">
              <div className="ov-share-trip-image"></div>
            </div>
            <div className="title">
              Share your trip
            </div>
            <div className="description">
              Share trips with friends to let them know which train you're on and if you have a delay. 
            </div>
          </div>
          <div className="col-md-4 cell cell-border-bottom">
            <div className="image">
              <div className="ov-order-food-image"></div>
            </div>
            <div className="title">
              Order food on the go
            </div>
            <div className="description">
              Do not feel like FASTfood? Avoid waiting times? Order food from the train and pick it up once you're at the station.
            </div>
          </div>
          <div className="col-md-4 cell last-cell cell-border-bottom">
            <div className="image">
              <div className="ov-receive-reminders-image"></div>
            </div>
            <div className="title">
              Receive reminders
            </div>
            <div className="description">
              Need to pickup a package at a train station? Notifications can be send when you're near it. 
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 first-cell cell">
            <div className="image">
              <div className="ov-plan-trip-image"></div>
            </div>
            <div className="title">
              Plan routes on the go
            </div>
            <div className="description">
              Plan routes with the current vehicle as starting point rather than calculate when you arrive somewhere.
            </div>
          </div>
          <div className="col-md-4 cell">
            <div className="image">
              <div className="ov-proactive-functionality-image"></div>
            </div>
            <div className="title">
              Pro-active functionality
            </div>
            <div className="description">
              Every Monday at 8' on the same train? Maybe you're heading towards the same destination again. 
            </div>
          </div>
          <div className="col-md-4 last-cell cell">
            <div className="image">
              <div className="ov-send-message-image"></div>
            </div>
            <div className="title">
              Send messages in case of disruptions
            </div>
            <div className="description">
              Automatically update your colleagues when you will be late for a meeting because of a disruption.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PublicTransportAssistant