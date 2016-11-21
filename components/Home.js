import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { login, logout } from '../actions/authenticate'
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock, Alert } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { browserHistory } from 'react-router'

function FieldGroup ({ id, label, help, inputRef, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl ref={inputRef} {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

FieldGroup.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  help: React.PropTypes.string,
  inputRef: React.PropTypes.func
}

class Home extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
    login: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired
  };

  constructor (props) {
    super(props)

    this.state = { error: null }

    this.validateAndLogin = this.validateAndLogin.bind(this)
  }

  validateAndLogin (e) {
    e.preventDefault()
    const username = ReactDOM.findDOMNode(this.username).value.trim()
    const firstName = ReactDOM.findDOMNode(this.firstName).value.trim()
    const lastName = ReactDOM.findDOMNode(this.lastName).value.trim()

    if (!username || !firstName || !lastName) {
      this.setState({
        error: 'Please provide a username and your first and last name before starting'
      })
      return
    }

    this.setState({
      error: null
    })

    this.props.login({
      username,
      firstName,
      lastName
    })

    browserHistory.push('/watch')
  }

  render () {
    const user = this.props.user
    if (user) {
      return (
        <div>
          <fieldset>
            <legend>Hello {user.firstName}!</legend>
          </fieldset>

          <LinkContainer to='/watch'><Button>Continue Activity</Button></LinkContainer>
          <Button onClick={this.props.logout}>Logout</Button>
        </div>
      )
    } else {
      return (
        <div>

          <form href='#' onSubmit={this.validateAndLogin}>
            <fieldset>
              <legend>Welcome!</legend>

              {this.state.error ? <Alert bsStyle='danger'>{this.state.error}</Alert> : ''}
              <FieldGroup
                id='username'
                type='text'
                label='Username'
                inputRef={(i) => { this.username = i }}
              />
              <FieldGroup
                id='firstName'
                type='text'
                label='First Name'
                inputRef={(i) => { this.firstName = i }}
              />
              <FieldGroup
                id='lastName'
                type='text'
                label='Last Name'
                inputRef={(i) => { this.lastName = i }}
              />
              <Button type='submit'>Get Started!</Button>

            </fieldset>
          </form>
        </div>
      )
    }
  }
}

export default connect(
  state => ({ user: state.authenticate.user }),
  { login, logout }
)(Home)
