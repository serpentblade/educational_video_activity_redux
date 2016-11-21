import { SET_ASSESSMENT_RESPONSE } from '../constants'

export function setAssessmentResponse (userId, responseId, responseValue) {
  return {
    type: SET_ASSESSMENT_RESPONSE,
    userId,
    responseId,
    responseValue
  }
}
