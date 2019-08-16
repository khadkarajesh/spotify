import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1/'
})
let token = localStorage.getItem('accessToken')
// instance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ? `Bearer ${token}` : ''
api.defaults.headers.common['Authorization'] = 'Bearer BQCpqXL6uY9HYm2ifZEGrxf6uzZtjuv_r4jw08qP5QdtW3Aar9m3HmQpIdtZlvzXA77IWUPe-taJ2XLu8WWC68HP7DWsp8FhqjMPaMHyL-OSqajcum5Wshv8D5Cd6hmuWkGrkqIyEmoXTqfJjnf8pUXe0fhsY-kQDGhnoER1outeBNS25qg5XEdjvsp-S6eHEfGAiy_JNHYrDivOCbkj-MQBPXu1Oee4s5tCT8oaznPyeNrCtLf3TYAfVnDIzKlTp2MPI2rMcW0lhjY'


const songsCategories = async() => {
    let response = await api.get('/browse/categories')
    return response.data.categories
}

export {
    songsCategories
}

