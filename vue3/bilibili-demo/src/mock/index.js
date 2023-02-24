import Mock from 'mockjs'
import swiperList from './data/swiperList'
import videosList from './data/videosList'
import products from './data/shop'


// - 假接口要满足什么？ 数据 url
Mock.setup({
    timeout: '50-1000' // 随机的延迟时间，模拟请求耗时
})
// 轮播图的假数据的配置 url /
// 拦截App中的xhr 请求 匹配路径
Mock.mock(/\/swiperList/, 'get', () => {
    return {
        code: 0,
        result: swiperList
    }
})

Mock.mock(/\/videosList/, 'get', () => {
    return {
        code: 0,
        result: videosList
    }
})
// 假冒的是服务器
Mock.mock(/\/products/, 'get', () => {
    return {
        code: 0, // 没有错误发生
        // code: 1,
        // msg: '服务器错误了',
        result: products
    }
})