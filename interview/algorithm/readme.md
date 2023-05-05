# 面试算法的路径
    - 高难  2-3个月 暑期实习的需要
    - 高频
        - 排序
        - 树的遍历三兄弟
            先中后 层序
            递归/迭代
            层序： 深度优先还是广度优先
        - 队列的变种
            双端/环
            如何用栈模仿队列
        - 贪心 分治 回溯等算法的经典场景
        - 动态规划
            背包  硬币  股票
    把它作为八股文来背

# 分治算法， 高效解决排序性能 O(nlogn)
    [8, 7, 6, 5, 4, 3, 2, 1]
    归并排序   快排
    - 分解子问题
        将要排序的数组从中间分割为两半，
        再将分割出来的每个子数组分割各分割为两半
        重复以上操作， 只有一个元素为主 return arr
    - 求解每个子问题
        粒度最小的子数组，两两合并，确保有序
    - 合并子问题的解 得出大问题的解
        合并的规模越来越大，得到了一个完全排序的数组
    双指针 
    分 求解  合并（递归）

# 快排
    - O(nlogn)
    - 分治思想
        - pivot  基准值  中间值
        - O(n) 比它小的放到左边， 比它大的放到右边   a b c
        - 左边的，右边的继续这么干
[5,1,3,6,2,8,7]
[5,1,3,]

[5,1,3,6,8,2,7]
[5,1,3,2,8,6,7]

[5,8,3,6,1,2,7]
[5,2,3,6,1,8,7]