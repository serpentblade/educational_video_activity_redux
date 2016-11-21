import { LOGIN, LOGOUT } from '../constants'

export function login (userData) {
  return {
    type: LOGIN,
    ...userData
  }
}

export function logout () {
  return {
    type: LOGOUT
  }
}
