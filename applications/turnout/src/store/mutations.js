import * as types from './mutation-types'

export const mutations = {
  [types.SIGN_IN] (state, user) {
    state.user = user
  },
  [types.SIGN_OUT] (state) {
    state.user = {}
  },
  [types.SET_EVENTS] (state, events) {
    state.events = events
  }
}
