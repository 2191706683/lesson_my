import axios from 'axios'

// axios.defaults.baseURL = 'https://www.fastmock.site/mock/995214af813bc47208cf2fcb558907e6/mall'
axios.defaults.baseURL = '//backend-api-01.newbee.ltd/api/v1'
// 请求头 带上 Content-Type
axios.defaults.headers['token'] = localStorage.getItem('token') || ''

axios.defaults.headers.post['Content-Type'] = 'application/json'

// use  拦截
// 结果后， 最外层data 自动脱落
// 请求拦截
// axios.interceptors.request.use()
// 响应拦截
// 一次配置，不用再data.data
axios.interceptors.response.use((res, config=false) => {
    if (config) {
        return res
    }
    return res.data
})

export default axios