import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_ENDPOINT
const getAccessToken = localStorage.getItem('access_token')

const instance = axios.create({ baseURL: baseUrl })
instance.defaults.headers.common['Authorization'] = localStorage.getItem('access_token') ? `Bearer ${getAccessToken}` : ''

const request = async (configs) => {
    try {
        let response = await instance(configs)
        return response.data
    } catch (error) {
        throw new AppError(error.response, error.message)
    }
}

export default request

class AppError extends Error {
    constructor(reponse, message, ...params) {
        super(...params)
        this.name = 'AppError'
    }
}

//reference
//https://dev.to/jam3/managing-env-variables-for-provisional-builds-h37

