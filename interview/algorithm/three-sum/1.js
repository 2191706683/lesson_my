const nums = [-1, 0, 1, 2, -1, -4]
// [[-1,0,1],[-1,-1,2]]
// - 三数求和问题，换成 1个数 O(n), 减法 得到的结果，两数之和
// - 双指针
const threeSum = function(nums) {
  let res = []
  // 有序后 双指针很强大
  // 升序 排序
  nums = nums.sort((a, b) => {
    return a - b
  })
  // console.log(nums)
  const len = nums.length
  // i < len - 2 留有两个指针的位置
  for(let i = 0; i < len - 2; i++) {
    // 左指针 j
    let j = i + 1
    // 右指针 k
    let k = len - 1
    if(i > 0 && nums[i] === nums[i - 1]) {
      continue // 去重
    }
    while(j < k) {
      // 三数之和小于零 左指针右移
      if(nums[i] + nums[j] + nums[k] < 0) {
        j++
        // 如果 nums[j] === nums[j-1] 继续 ++ 
        while(j < k && nums[j] === nums[j-1]) {
          j++
        }
      }else if(nums[i] + nums[j] + nums[k] > 0) {
        k--
        while(j < k && nums[k] === nums[k-1]) {
          k--
        }
      }else {
        res.push([nums[i], nums[j] , nums[k]])
        j++
        k--
        while(j < k && nums[j] === nums[j-1]) {
          j++
        }
        while(j < k && nums[k] === nums[k-1]) {
          k--
        }
      }
    }
  }
  return res
}
console.log(threeSum(nums))