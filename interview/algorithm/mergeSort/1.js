function mergeSort(arr) {
    const len = arr.length
    if (len <= 1 ) return arr

    const mid = Math.floor(len / 2) // 取整
    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid, len))
    arr = mergeArr(leftArr ,rightArr)
    return arr
    // len 完成排序
}
/* 
 * @param {*} arr1
 * @param {*} arr2
 * arr1 arr2 都是有序的
 */

function mergeArr(arr1, arr2) {
    // 初始化两个指针，指向 arr1 arr2
    let i = 0, j = 0
    // 结果数据
    const res = []
    const len1 = arr1.length
    const len2 = arr2.length
    while(i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    if (i < len1) {
        return res.concat(arr1.slice(i))
    } else {
        return res.concat(arr2.slice(j))
    }
}
console.log(mergeSort([1, 7, 3, 4, 5, 8, 2, 6]))

