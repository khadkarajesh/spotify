import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = 'http://localhost:3000/'
const baseUrl = process.env.REACT_APP_API_ENDPOINT
const api = axios.create({
    baseURL: baseUrl
})
let token = localStorage.getItem('accessToken')
// instance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ? `Bearer ${token}` : ''
//api.defaults.headers.common['Authorization'] = 'Bearer BQCpqXL6uY9HYm2ifZEGrxf6uzZtjuv_r4jw08qP5QdtW3Aar9m3HmQpIdtZlvzXA77IWUPe-taJ2XLu8WWC68HP7DWsp8FhqjMPaMHyL-OSqajcum5Wshv8D5Cd6hmuWkGrkqIyEmoXTqfJjnf8pUXe0fhsY-kQDGhnoER1outeBNS25qg5XEdjvsp-S6eHEfGAiy_JNHYrDivOCbkj-MQBPXu1Oee4s5tCT8oaznPyeNrCtLf3TYAfVnDIzKlTp2MPI2rMcW0lhjY'


const songsCategories = async () => {
    let response = await api.get('/browse/categories')
    return response.data.categories
}

const getToken = async (code) => {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    let encodedString = btoa(`${process.env.REACT_APP_SECRET}:${CLIENT_ID}`)
    api.defaults.headers.common['Authorization'] = `Basic ${encodedString}`
    let response = await api.post('https://accounts.spotify.com/api/token', { grant_type: 'authorization_code', code: code, redirectUri: REDIRECT_URI })
    return response
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

