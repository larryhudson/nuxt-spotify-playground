<template>
<div>

    <ol>
        <li v-for="track in tracks" :key="track.id">
          <img :src="track.album.images[1].url" />
          <audio :src="track.preview_url" controls />

          <a :href="track.uri">{{track.name}}</a>
          <button @click="toggleSave(track.id)">{{!added.includes(track.id) ? 'Save' : 'Remove' }}</button>
      </li>
    </ol>

</div>

</template>

<script>
import fetchFromSpotifyApi from '../utils/spotifyApi'

export default {
    data() {
        return {
            tracks: [],
            added: [],
        }
    },
    async fetch() {
        const tracksResponse = await fetchFromSpotifyApi(`artists/${this.artist}/top-tracks?market=AU`).then(res => res.json())

        if (tracksResponse) {
            console.log({tracksResponse})
            this.tracks = tracksResponse.tracks
        }

    },
    props: ['artist'],
    fetchOnServer: false,
    methods: {
    async toggleSave(trackId) {

      const method = this.added.includes(trackId) ? 'DELETE' : 'PUT'

      const saveResponse = await fetchFromSpotifyApi(
        `me/tracks?ids=${trackId}`,
        method
      )

      if (saveResponse.ok) {
        if (method === 'DELETE') {
          this.added = this.added.filter(i => i !== trackId)
        } else {
          this.added = [...this.added, trackId]
        }
      }
    }
}
}
</script>

<style scoped>
ol {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}

li {
    width: 100px;
    padding: 1rem;
}

img {
    width: 100px;
    height: 100px;
    object-fit: cover;
}

audio {
    max-width: 100%;
}
</style>