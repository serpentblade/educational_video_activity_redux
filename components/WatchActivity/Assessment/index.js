import React, { Component } from 'react'
import Question from './Question'

export default class Assessment extends Component {
  static propTypes = {
    activity: React.PropTypes.object.isRequired
  };

  render () {
    const assessment = this.props.activity.assessment

    return (
      <div>
        {assessment.map((q, index) => (
          <Question
            key={q.id}
            question={q}
            questionIndex={index + 1}
          />
        ))}
      </div>
    )
  }
}
