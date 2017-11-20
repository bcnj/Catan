
/**
 * ACTION TYPES
 */
const SET_USER = 'SET_USER'
/**
 * ACTION CREATORS
 */
const setUser = user => ({type: SET_USER, user})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}
