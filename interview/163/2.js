// 快速选择排序
function quickSelect(arr, k) {
    if (arr.length === 1) {
        return arr[0];
    }

    // 随机
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const smaller = arr.filter(num => num < pivot);
    const equal = arr.filter(num => num === pivot);
    const larger = arr.filter(num => num > pivot);

    // larger smaller 的length和 k有关系
    if (k <= larger.length) {
        return quickSelect(larger, k);
    } else if (k <= larger.length + equal.length) {
        // 
        return pivot
    } else {
        return quickSelect(smaller, k - larger.length - equal.length);
    }

}
