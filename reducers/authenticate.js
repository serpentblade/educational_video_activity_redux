import { LOGIN, LOGOUT } from '../constants'
import { createUser } from '../lib/authenticate'
import _ from 'lodash'

const initialState = {
  user: null,
  allUsers: []
}

export default function update (state = initialState, action) {
  if (action.type === LOGIN) {
    let user = _.find(state.allUsers, { username: action.username })

    if (!user) {
      user = createUser({
        username: action.username,
        firstName: action.firstName,
        lastName: action.lastName
      })
    }

    return Object.assign({}, state, {
      user,
      allUsers: [
        ...state.allUsers,
        user
      ]
    })
  } else if (action.type === LOGOUT) {
    return Object.assign({}, state, { user: null })
  }

  return state
}
