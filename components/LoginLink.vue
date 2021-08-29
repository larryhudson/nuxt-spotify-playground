<template>
    <a href="https://accounts.spotify.com/authorize?client_id=5388f0f6c62a44e6836482ddca009d4e&response_type=code&redirect_uri=https://nuxt-spotify-playground.netlify.app/.netlify/functions/spotify-oauth&scope=user-top-read%20user-library-modify">Login</a>
</template>

<script>
export default {
    asyncData() {
        return {
            SPOTIFY_CLIENT_ID: '5388f0f6c62a44e6836482ddca009d4e'
        }
    }
}
</script>