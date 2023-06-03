function merge(nums1, m, nums2, n) {
    // 循环 索引
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while(i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while(j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}