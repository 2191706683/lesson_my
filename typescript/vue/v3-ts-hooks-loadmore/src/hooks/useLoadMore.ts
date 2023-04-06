/**
 * 加载更多的按钮
 * page 加载第几页
 * mvvm proxy  list 
 * 函数式编程 更加淋漓尽致
 */
import {useStore } from 'vuex'
import { computed, ref, ComputedRef } from 'vue'
export interface LoadParams {
    columnId?: string;
    currentPage: number;
    pageSize: number
}
// 列表加载更多  
// actionName  
//  isLastPage
//  vuex  dispatch action -> commit -> mutations-> state 
const useLoadMore = (actionName: string, total: ComputedRef<number>, 
    params: LoadParams = {currentPage: 1, pageSize: 5}) => {
    const store = useStore()
    const { currentPage: current, pageSize, columnId} = params
    const currentPage = ref(current)
    const requestParams = computed(() => ({
        currentPage: currentPage.value,
        pageSize,
        columnId
    }))
    const loadMorePage = () => {
        // console.log('/////')
        store.dispatch(actionName, requestParams.value).then(() => {
            currentPage.value++
        })
    }
    const isLastPage = computed(() => {
        return Math.ceil(total.value / pageSize) < currentPage.value
    }) 
    return {
        loadMorePage, // 函数 
        isLastPage, // 最后一页
        currentPage // 页码
    }
}
export default useLoadMore