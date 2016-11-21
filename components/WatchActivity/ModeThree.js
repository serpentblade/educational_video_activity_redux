import React from 'react'
import { Alert, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

import VideoPlayer from './VideoPlayer'
import Assessment from './Assessment'
import ActivityInstructions from './ActivityInstructions'

export default class ModeThree extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    activity: React.PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      currentPage: 1
    }

    this.gotoPageTwo = this.gotoPageTwo.bind(this)
    this.gotoPageThree = this.gotoPageThree.bind(this)
    this.renderQuestions = this.renderQuestions.bind(this)
    this.renderPageOne = this.renderPageOne.bind(this)
    this.renderPageTwo = this.renderPageTwo.bind(this)
    this.renderPageThree = this.renderPageThree.bind(this)
  }

  gotoPageTwo () {
    this.setState({
      currentPage: 2
    })
  }

  gotoPageThree () {
    this.setState({
      currentPage: 3
    })
  }

  renderCurrentPage () {
    switch (this.state.currentPage) {
      case 3: return this.renderPageThree()
      case 2: return this.renderPageTwo()
      case 1: return this.renderPageOne()
    }
  }

  renderQuestions () {
    return (
      <ListGroup>
        {this.props.activity.assessment.map(q => (
          // Forgive me, I've grown lazy and have already gone overboard on this "test"...
          <ListGroupItem>{q.alt_text || q.text}</ListGroupItem>
        ))}
      </ListGroup>
    )
  }

  renderPageOne () {
    return (
      <div>
        <div className='jumbotron'>
          <h1 className='display-3'>{this.props.activity.title}</h1>
          <p className='lead'>{this.props.activity.introduction}</p>
          <hr className='m-y-md' />
          {this.renderQuestions()}
          <hr className='m-y-md' />
          <p className='lead'>
            <Button bsStyle='primary' bsSize='large' onClick={this.gotoPageTwo}>Let's Get Started!</Button>
          </p>
        </div>
      </div>
    )
  }

  renderPageTwo () {
    return (
      <div>
        <ActivityInstructions {...this.props} />
        <div className='row'>
          <div className='col-md-8 col-sm-12'>
            <VideoPlayer {...this.props} />

          </div>
          <div className='col-md-4 hidden-sm'>
            {this.renderQuestions()}
            <Button bsStyle='primary' bsSize='large' onClick={this.gotoPageThree}>
              I'm ready to answer questions!
            </Button>
          </div>
        </div>
      </div>
    )
  }

  renderPageThree () {
    return (
      <div className='row'>
        <div className='col-md-8 col-sm-12'>
          <VideoPlayer {...this.props} />
        </div>
        <div className='col-md-4 col-sm-12'>
          <Assessment {...this.props} />
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>
        <Alert bsStyle='info'>
          This final mode takes an advanced multi-step solution:<br />
          First, we introduce the student to the questions before hand
          so they know what to look for in preparation for viewing the video<br />
          Then, they continue to watch the video with the questions available to them.<br />
          Finally, after finishing the video they can move forward to a page similar to mode #2
          where they can answer questions but still re-watch the video if they so choose
        </Alert>
        <h4>Activity Mode #3: {this.props.activity.title}</h4>
        {this.renderCurrentPage()}
      </div>
    )
  }
}
