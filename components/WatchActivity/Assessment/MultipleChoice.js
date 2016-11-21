import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Checkbox, Radio, FormGroup } from 'react-bootstrap'
import _ from 'lodash'

import { setAssessmentResponse } from '../../../actions/assessment'

export class MultipleChoice extends Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    setAssessmentResponse: React.PropTypes.func.isRequired,
    question: React.PropTypes.object.isRequired,
    questionResponse: React.PropTypes.any
  };

  constructor (props) {
    super(props)

    this.multiSelect = Array.isArray(this.props.question.answer)
    this.valueChanged = this.valueChanged.bind(this)
  }

  valueChanged (e) {
    let newValue = this.props.questionResponse

    if (this.multiSelect) {
      // force creation of new array
      newValue = [...(newValue || [])]
      if (e.target.checked) {
        newValue.push(e.target.value)
      } else {
        _.pull(newValue, e.target.value)
      }
    } else {
      newValue = e.target.value
    }

    this.props.setAssessmentResponse(this.props.user.id, this.props.question.id, newValue)
  }

  render () {
    const questionId = this.props.question.id
    const response = this.props.questionResponse
    const responseValueAsArray = Array.isArray(response) ? response : _.filter([response])
    const options = this.props.question.options
    let answerList

    if (this.multiSelect) {
      answerList = options.map(o =>
        (
          <Checkbox
            checked={responseValueAsArray.includes(o)}
            key={o}
            name={questionId}
            value={o}
            onChange={this.valueChanged}
          >
            {o}
          </Checkbox>
        )
      )
    } else {
      answerList = options.map(o =>
        (
          <Radio
            checked={responseValueAsArray.includes(o)}
            key={o}
            name={questionId}
            value={o}
            onChange={this.valueChanged}
          >
            {o}
          </Radio>
        )
      )
    }

    return (
      <FormGroup>{answerList}</FormGroup>
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
)(MultipleChoice)
