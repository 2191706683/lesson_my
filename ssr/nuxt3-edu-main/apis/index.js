// 首页接口 基于一个统一接口
// hooks 自动被找到
export function useIndexDataApi() {
    // 通用方法 请求拦截 -> useFetch
    return useHttpGet('IndexData', "/index", {
        lazy: true
    })
}