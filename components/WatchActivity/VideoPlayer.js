import React from 'react'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import { ResponsiveEmbed } from 'react-bootstrap'
import { recordVideoAction } from '../../actions/track-video'
import { VIDEO_PLAYED, VIDEO_PAUSED, VIDEO_ENDED, VIDEO_REPLAYED } from '../../constants'

export class VideoPlayer extends React.Component {

  static propTypes = {
    activity: React.PropTypes.object.isRequired,
    user: React.PropTypes.object.isRequired,
    recordVideoAction: React.PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.videoUrl = this.props.activity.videoUrl || 'https://www.youtube.com/watch?v=q7i0V26wWiM'
    this.showControls = !!this.props.activity.showControls
    this.state = {
      started: false,
      ended: false,
      playing: false
    }
    this.recordVideoEvent = this.videoEvent.bind(this)
    this.videoStart = this.videoStart.bind(this)
    this.videoPlay = this.videoPlay.bind(this)
    this.videoPause = this.videoPause.bind(this)
    this.videoEnded = this.videoEnded.bind(this)
  }

  videoEvent (actionType) {
    this.props.recordVideoAction(this.props.user.id, actionType)
  }

  videoStart () {
    this.setState({
      started: true
    })
  }

  videoPlay () {
    // Try and identifying seeking
    if (!this.state.playing) {
      this.videoEvent(VIDEO_PLAYED)
      this.setState({
        playing: true
      })
    }

    if (this.state.ended) {
      this.setState({
        ended: false
      })
      this.videoEvent(VIDEO_REPLAYED)
    }
  }

  videoPause () {
    this.setState({
      playing: false
    })
    this.videoEvent(VIDEO_PAUSED)
  }

  videoEnded () {
    this.setState({
      started: false,
      ended: true
    })
    this.videoEvent(VIDEO_ENDED)
  }

  render () {
    return (
      <div className='well'>
        <ResponsiveEmbed a16by9>
          <ReactPlayer
            url={this.videoUrl}
            width='100%'
            height='100%'
            controls={this.showControls}
            onStart={this.videoStart}
            onPlay={this.videoPlay}
            onPause={this.videoPause}
            onEnded={this.videoEnded}
          />
        </ResponsiveEmbed>
      </div>
    )
  }
}

export default connect(
  (state) => ({ user: state.authenticate.user }),
  { recordVideoAction }
)(VideoPlayer)
