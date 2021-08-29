export default function getFromSpotifyApi(endpoint, method='GET') {

    return fetch(`https://nuxt-spotify-playground.netlify.app/.netlify/functions/spotify-api`, {
            body: JSON.stringify({endpoint, method}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
}