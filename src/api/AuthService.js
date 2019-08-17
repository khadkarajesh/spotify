import qs from 'query-string'
import request from './ApiService'

const REDIRECT_URI = 'http://localhost:3000/callback/'

const getToken = async (code) => {
    try {
        let response = await request({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': `Basic ` + btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_SECRET}`)
            },
            data: qs.stringify({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: REDIRECT_URI
            })
        })
        saveTokens(response)
    } catch (error) {
        console.log(error)
    }
}

const saveTokens = (response) => {
    localStorage.setItem('access_token', response.access_token)
    localStorage.setItem('token_type', response.token_type)
    localStorage.setItem('expires_in', response.expires_in)
    localStorage.setItem('refresh_token', response.refresh_token)
}

export {getToken}