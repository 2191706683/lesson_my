import axios from 'axios'
import store from '../store'

// axios.defaults.baseURL = 'http://localhost:8080/api/'

axios.interceptors.request.use(config => {
    // 同步 
    store.commit('setLoading', true)
    store.commit('setError', { status: false, message: ''})
    return config 
})

axios.interceptors.response.use(res => {
    store.commit('setLoading', false)
    return res.data
}, e => {
    const { error } = e.response.data
    store.commit('setError', { status: true, message: error})
    store.commit('setLoading', false) 
    return Promise.reject(error)
})

export { axios }