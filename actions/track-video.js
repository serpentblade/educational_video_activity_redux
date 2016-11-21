import { TRACK_VIDEO } from '../constants'

export function recordVideoAction (userId, actionType, additionalParams = {}) {
  return {
    type: TRACK_VIDEO,
    userId,
    actionType,
    timestamp: new Date(),
    ...additionalParams
  }
}

