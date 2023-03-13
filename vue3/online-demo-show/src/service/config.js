import axios from 'axios'

axios.interceptors.request.use((config) => {
    let token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

axios.interceptors.response.use((res) => {
    return res.data
})

export default axios