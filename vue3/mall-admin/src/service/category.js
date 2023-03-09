import axios from "./config"
export const getCategoryData = (params) => {
    return axios.get('/categories', params)
}