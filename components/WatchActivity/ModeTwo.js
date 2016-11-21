import React from 'react'
import { Alert } from 'react-bootstrap'

import VideoPlayer from './VideoPlayer'
import Assessment from './Assessment'
import ActivityInstructions from './ActivityInstructions'

export default class ModeOne extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    activity: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <div>
        <Alert bsStyle='info'>
          This mode puts the assessments adjacent to the video so it is apparent they exist and can be
          completed while still watching (less scrolling)
        </Alert>
        <h4>Activity Mode #2: {this.props.activity.title}</h4>
        <ActivityInstructions {...this.props} />
        <div className='row'>
          <div className='col-md-8 col-sm-12'>
            <VideoPlayer {...this.props} />
          </div>
          <div className='col-md-4 col-sm-12'>
            <Assessment {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}
