import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, combineReducers } from 'redux'
import persistState from 'redux-localstorage'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'
import AppRouter from './router'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' defaultIsVisible={false}>
    <LogMonitor theme='tomorrow' preserveScrollTop={false} />
  </DockMonitor>
)

const enhancer = compose(
  persistState(['authenticate', 'trackVideo', 'assessment'])
)

const store = createStore(
  reducer,
  DevTools.instrument(),
  enhancer
)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AppRouter history={history} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('mount')
)
