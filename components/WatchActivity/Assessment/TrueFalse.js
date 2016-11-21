import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Radio, FormGroup } from 'react-bootstrap'

import { setAssessmentResponse } from '../../../actions/assessment'

export class TrueFalse extends Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    setAssessmentResponse: React.PropTypes.func.isRequired,
    question: React.PropTypes.object.isRequired,
    questionResponse: React.PropTypes.any
  };

  constructor (props) {
    super(props)

    this.valueChanged = this.valueChanged.bind(this)
  }

  valueChanged (e) {
    this.props.setAssessmentResponse(this.props.user.id, this.props.question.id, e.target.value === 'true')
  }

  render () {
    const response = this.props.questionResponse
    const questionId = this.props.question.id

    return (
      <FormGroup>
        <Radio
          checked={response === true}
          key='true'
          name={questionId}
          onChange={this.valueChanged}
          value='true'
        >
          True
        </Radio>
        <Radio
          checked={response === false}
          key='false'
          name={questionId}
          onChange={this.valueChanged}
          value='false'
        >
          False
        </Radio>
      </FormGroup>
    )
  }
}

export default connect(
  (state, { question }) => {
    const user = state.authenticate.user
    const allResponses = state.assessment.responses[user.id] || {}
    let questionResponse = allResponses[question.id]

    if (questionResponse === undefined) {
      questionResponse = null
    }

    return {
      user,
      questionResponse
    }
  },
  { setAssessmentResponse }
)(TrueFalse)
