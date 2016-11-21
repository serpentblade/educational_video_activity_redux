import { SET_ASSESSMENT_RESPONSE } from '../constants'

const initialState = {
  responses: {},
  responseHistory: {}
}

export default function update (state = initialState, action) {
  if (action.type === SET_ASSESSMENT_RESPONSE) {
    const { userId, responseId, responseValue } = action

    // User responses
    const userResponses = state.responses[userId] || {}
    // Response History
    const userResponseHistory = state.responseHistory[userId] || []
    const newResponse = {
      responseId,
      responseValue,
      timestamp: new Date()
    }

    return {
      responses: {
        ...state.responses,
        [userId]: {
          ...userResponses,
          [responseId]: responseValue
        }
      },
      responseHistory: {
        ...state.responseHistory,
        [userId]: [
          ...userResponseHistory,
          newResponse
        ]
      }
    }
  }

  return state
}
