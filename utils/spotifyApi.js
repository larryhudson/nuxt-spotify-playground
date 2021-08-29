export default function getFromSpotifyApi(endpoint, token) {
    const SPOTIFY_URL_BASE = `https://api.spotify.com/v1`
    return fetch(`${SPOTIFY_URL_BASE}/${endpoint}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}