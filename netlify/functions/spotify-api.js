import fetch from 'node-fetch';
import cookie from 'cookie';
import btoa from 'btoa';
const { URLSearchParams } = require('url');

export async function handler(event) {

    const SPOTIFY_URL_BASE = `https://api.spotify.com/v1`

    // read the cookie

    console.log(event.headers.cookie)

    const siteCookies = cookie.parse(event.headers.cookie)

    if (!siteCookies.nuxt_spotify) {
        return {
            statusCode: 400,
            body: 'Not logged in'
        }
    }

    const accessToken = JSON.parse(siteCookies.nuxt_spotify).access_token

    // get the endpoint

    const endpoint = JSON.parse(event.body).endpoint
    const method = JSON.parse(event.body).method


    const spotifyResponse = await fetch(`${SPOTIFY_URL_BASE}/${endpoint}`, {
        method,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    if (!spotifyResponse.ok) {
        return {statusCode: 400, body: JSON.stringify(spotifyResponse)}
    }

    console.log({spotifyResponse})

    try {
        const spotifyJson = await spotifyResponse.json()

        if (spotifyJson) {
            return {
                statusCode: 200,
                body: JSON.stringify(spotifyJson)
            }
        }
    } catch {
        return {
            statusCode: 200,
            body: 'OK'
        }
    }




}
