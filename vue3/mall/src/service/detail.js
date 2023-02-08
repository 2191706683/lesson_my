import axios from './config.js'  // axios 标准

export function getDetail(id) {
    return axios.get(`/goods/detail/${id}`) // promise
}