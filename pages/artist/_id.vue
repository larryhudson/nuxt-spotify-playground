<template>
  <div>
    <h1>{{ artistData.name }}</h1>
    <h2>Top tracks</h2>
    <ol>
      <li v-for="track in topTracks" :key="track.id">
          <img :src="track.album.images[1].url" />
          <audio :src="track.preview_url" controls />

          <a :href="track.uri">{{track.name}}</a>
      </li>
    </ol>
    <h2>Similar artists</h2>
    <ol>
      <li v-for="artist in similarArtists" :key="artist.id">
          <img :src="artist.images[1].url" />
          <NuxtLink :to="`/artist/${artist.id}`">{{artist.name}}</NuxtLink>
      </li>
    </ol>
    <pre>
        {{ JSON.stringify(artistData, null, 2) }}
        </pre
    >
  </div>
</template>

<script>
import fetchFromSpotifyApi from '../../utils/spotifyApi'

export default {
  async asyncData({ store, route }) {

    const artistId = route.params.id

    const artistData = await fetchFromSpotifyApi(
      `artists/${artistId}`,
    ).then((res) => res.json())

    const topTracks = await fetchFromSpotifyApi(
      `artists/${artistId}/top-tracks?market=AU`,
    ).then((res) => res.json())

    const similarArtists = await fetchFromSpotifyApi(
        `artists/${artistId}/related-artists`,
    ).then(res => res.json())

    return {
      artistData,
      topTracks: topTracks.tracks,
      similarArtists: similarArtists.artists
    }
  },
  fetchOnServer: false
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