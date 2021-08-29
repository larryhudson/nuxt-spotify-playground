export default function getFromSpotifyApi(endpoint) {
    const SPOTIFY_URL_BASE = `https://api.spotify.com/v1`
    return fetch(`http://localhost:8888/.netlify/functions/spotify-api`, {
            body: JSON.stringify({endpoint}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
}