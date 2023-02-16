import axios from './config.js'

export const login = (params) => {
    return axios.post('/adminUser/login', params)
}

export const getUserProfile = (params) => {
    return axios.post('/adminUser/profile', params)
}