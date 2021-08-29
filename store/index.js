export const state = () => ({
    token: null
  })

  export const mutations = {
    setToken(state, text) {
      state.token = text
    },
    removeToken() {
      state.token = null
    },
  }