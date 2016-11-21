import { TRACK_VIDEO } from '../constants'

const initialState = {
  videoActions: {}
}

export default function update (state = initialState, action) {
  if (action.type === TRACK_VIDEO) {
    const { userId, actionType, timestamp } = action
    const userActions = state.videoActions[userId] || []
    const newAction = {
      actionType,
      timestamp
    }

    return {
      videoActions: {
        ...state.videoActions,
        [userId]: [
          ...userActions,
          newAction
        ]
      }
    }
  }

  return state
}
