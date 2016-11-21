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
        <h4>Activity Mode #1: {this.props.activity.title}</h4>
        <Alert bsStyle='info'>
          This is the simple approach: large video followed by assessment.
          Hypothesis: poor consideration of UX leads to less success
          and/or user frustration as it requires considerable scrolling
          and makes it quite difficult to answer questions while watching.
        </Alert>
        <ActivityInstructions {...this.props} />
        <VideoPlayer {...this.props} />
        <Assessment {...this.props} />
      </div>
    )
  }
}
