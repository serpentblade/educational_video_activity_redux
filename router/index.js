import React from 'react'
import { Router, Route, IndexRoute, Redirect } from 'react-router'
import { App, Home, WatchActivity } from '../components'

export default class AppRouter extends React.Component
{
  static propTypes = {
    history: React.PropTypes.object.isRequired
  };

  render () {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='watch/:modeId' component={WatchActivity} />
          <Route path='watch' component={WatchActivity} />
          <Redirect to='/' />
        </Route>
      </Router>
    )
  }
}
