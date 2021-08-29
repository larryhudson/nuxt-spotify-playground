<template>
<div>
    <h1>Hello</h1>

    <ul>
        <li v-for="artist in artists">
            <p><NuxtLink :to="`/artist/${artist.id}`">{{artist.name}}</NuxtLink></p>
            <img :src="artist.images[1].url" width="100" height="100" style="object-fit:cover" />
        </li>
    </ul>

</div>

</template>

<script>
import fetchFromSpotifyApi from '../utils/spotifyApi'

export default {
    data() {
        return {
            artists: []
        }
    },
    async fetch() {
        const artistsResponse = await fetchFromSpotifyApi('me/top/artists').then(res => res.json())

        if (artistsResponse) {
            this.artists = artistsResponse.items
        }

    },
    fetchOnServer: false
}
</script>

<style scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }

    li {
        padding: 0.25rem;
        width: 100px;
    }
</style>