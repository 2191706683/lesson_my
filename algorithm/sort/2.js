// 算法题目 先排序 再计算
// 冒泡 堆排序 快排 选择排序 插入排序
const arr = [1, 4, 2, 3, 6, 10, 7]
arr.sort((a, b) => {
    return a - b
})
console.log(arr)