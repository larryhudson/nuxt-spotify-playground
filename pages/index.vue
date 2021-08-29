<template>
  <div>
  <LoginLink/>

  <SpotifyTopArtists v-bind:token="accessToken" />
  </div>

</template>

<script>
import getTokenFromRequest from '../utils/getTokenFromRequest'

export default {
  asyncData({req, store}) {

    if (req) {
      const accessToken = getTokenFromRequest(req)
      store.commit('setToken', accessToken)
    }

    
    {
      return {
        accessToken: store.state.token
      }
    }
  }
}
</script>
