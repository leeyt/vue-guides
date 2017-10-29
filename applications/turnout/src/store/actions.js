import * as types from './mutation-types'

export const signIn = ({commit}, user) => {
  commit(types.SIGN_IN, user)
}