import { createStore, Commit } from 'vuex'
import { GlobalDataProps } from '../types'
import { AxiosRequestConfig, axios } from '../api/config'
import { arrToObj, objToArr } from '../utils'

// 通用封装 
const asyncAndCommit = async (url: string, mutationName: string, commit: Commit, 
    config: AxiosRequestConfig = { method: 'get'},
    extraData?:any
    ) => {
    const data = await axios(url, config)
    if (extraData) {
        commit(mutationName, { data, extraData})
    } else {
        commit(mutationName, { data })
    }
    return data
}

const store = createStore<GlobalDataProps>({
    state: {
        columns: {
            data: {},
            currentPage: 0,
            total: 0
        }
    },
    getters: {
        getColumns: (state) => {
            return objToArr(state.columns.data)
        }
    },
    mutations: {
        fetchColumns(state, rawData) {
            // state.columns= {}
            console.log(rawData, 'mutations')
            const { data } = state.columns
            const { list, count, currentPage } = rawData.data.data.data
            // console.log(list, count, currentPage)
            state.columns = {
                total: count,
                currentPage: currentPage,
                data: {
                    ...data,
                    ...arrToObj(list)
                }
            }
        }
    },
    actions: {
        // 翻页查询
        fetchColumns({state, commit}, params = {}) {
            const { currentPage = 1, pageSize = 6} = params
            if (state.columns.currentPage < currentPage ) { // 新的数据
                return asyncAndCommit( // async 请求接口 axios + url, commit mutations
                    `/api/columns?currentPage=${currentPage}&pageSize=${pageSize}`,
                    'fetchColumns',
                    commit
                )
            }
        }
    }
})

export default store