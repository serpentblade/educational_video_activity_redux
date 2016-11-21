import React from 'react'
import { connect } from 'react-redux'

import ModeOne from './ModeOne'
import ModeTwo from './ModeTwo'
import ModeThree from './ModeThree'

export class ActivityContainer extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    activity: React.PropTypes.object,
    params: React.PropTypes.object
  };

  render () {
    // Allow overriding the default mode for evaluation
    const paramsMode = parseInt(this.props.params.modeId, 10)
    const mode = !isNaN(paramsMode) ? paramsMode : this.props.user.mode

    switch (mode) {
      case 3:
        return <ModeThree {...this.props} />
      case 2:
        return <ModeTwo {...this.props} />
      case 1:
      default:
        return <ModeOne {...this.props} />
    }
  }
}

export default connect(
  state => ({ user: state.authenticate.user, activity: state.activityData.currentActivity }),
  { }
)(ActivityContainer)
