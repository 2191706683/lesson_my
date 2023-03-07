- 任务流 Promise序列
    [upload(),upload(),upload(),upload()]
    - 随机定时器值 任务完成时间和索引没有关系
    - 一半成功,一半失败
    - setTimeout 第三个参数会在定时器到达时触发
    - promise then 最后catch rejected 时候触发
    - async await
        rejected
        try {

        } catch(err) {
            
        }
    - console.log 是否运行了

    - Promise.all
        全部执行通过才认为是成功,否则认为是失败
        有失败并不会停下来
        结果
        - 并发
    - Promise.race
        - 第一个完成的 result
        - 所有的都会运行
        - 并行
    - any
        - 只要有一个成功 
