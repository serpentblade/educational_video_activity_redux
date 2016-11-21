import React from 'react'
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap'
export default class ActivityInstructions extends React.Component {
  static propTypes = {
    activity: React.PropTypes.object.isRequired
  };

  render () {
    const notes = this.props.activity.instructions
    return (
      <Panel header='Video Notes and Tips' bsStyle='info'>
        <ListGroup fill>
          {notes.map((n, i) => (<ListGroupItem key={i}>{n}</ListGroupItem>))}
        </ListGroup>
      </Panel>
    )
  }
}
