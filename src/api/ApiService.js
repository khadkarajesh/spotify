import axios from 'axios'
import qs from 'query-string'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = 'http://localhost:3000/callback/'
const baseUrl = process.env.REACT_APP_API_ENDPOINT
const api = axios.create({
    baseURL: baseUrl
})

const getAccessToken = localStorage.getItem('access_token')

api.defaults.headers.common['Authorization'] = localStorage.getItem('access_token') ? `Bearer ${getAccessToken}` : ''

const songsCategories = async () => {
    let response = await api.get('/browse/categories')
    return response.data.categories
}

const getToken = async (code) => {
    let response = await api.post('https://accounts.spotify.com/api/token',
        qs.stringify({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI
        }), {
            headers: {
                'Authorization': `Basic ` + btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_SECRET}`)
            }
        })
    saveTokens(response.data)
}

const saveTokens = (response) => {
    localStorage.setItem('access_token', response.access_token)
    localStorage.setItem('token_type', response.token_type)
    localStorage.setItem('expires_in', response.expires_in)
    localStorage.setItem('refresh_token', response.refresh_token)
}



const authorize = async () => {
    let scopes = encodeURIComponent('user-read-private user-read-email')
    let redirectUri = encodeURIComponent(REDIRECT_URI)
    let response = await api.get(`https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${scopes}&redirect_uri=${redirectUri}`)
    return response
}

export {
    songsCategories,
    authorize,
    getToken
}

//reference
//https://dev.to/jam3/managing-env-variables-for-provisional-builds-h37

