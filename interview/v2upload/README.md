- 大文件上传前端细节
    - 切皮，基于html5的 file 二进制流 按字节切片
    - md5 计算
      - 普通计算，阻塞主线程，权限测试
      - requestIdCallback 时间分片
      - html5 worker 独立线程 消息机制 长于计算
    - map 流程
        - chunkList 切片数据
        - 切片的响应式数组 table
        - post 请求体 formData 数组
        - Promise.all 数组

    - Promise 限流
        xhr.abort 写出来
