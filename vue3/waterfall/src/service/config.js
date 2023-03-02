import axios from 'axios'

axios.interceptors.response.use((res) => {
    return res.data
})

export default axios