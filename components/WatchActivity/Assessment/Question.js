import React, { Component } from 'react'
import { Panel, Badge } from 'react-bootstrap'

import TrueFalse from './TrueFalse'
import MultipleChoice from './MultipleChoice'

export default class Question extends Component {
  static propTypes = {
    question: React.PropTypes.object.isRequired,
    questionIndex: React.PropTypes.number.isRequired
  };

  constructor (props) {
    super(props)

    this.renderQuestionOptions = this.renderQuestionOptions.bind(this)
  }

  renderQuestionOptions () {
    const q = this.props.question
    if (q.type === 'true-false') {
      return (<TrueFalse {...this.props} />)
    } else if (q.type === 'multiple-choice') {
      return (<MultipleChoice {...this.props} />)
    }
  }

  render () {
    const title = (<h3><Badge>#{this.props.questionIndex}</Badge> {this.props.question.text}</h3>)

    return (
      <Panel header={title}>
        {this.renderQuestionOptions()}
      </Panel>
    )
  }
}
