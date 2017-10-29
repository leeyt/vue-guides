import * as types from './mutation-types'

export const signIn = ({commit}, user) => {
  commit(types.SIGN_IN, user)
}

export const signOut = ({commit}) => {
  commit(types.SIGN_OUT)
}

export const setEvents = ({commit}, events) => {
  commit(types.SET_EVENTS, events)
}
