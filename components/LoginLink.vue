<template>
    <a href="https://accounts.spotify.com/authorize?client_id=5388f0f6c62a44e6836482ddca009d4e&response_type=code&redirect_uri=http://localhost:8888/.netlify/functions/spotify-oauth&scope=user-top-read">Login</a>
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