# 前端大文件上传 + 断点续传解决方案

- 简历review 给我 投递 成都 长沙 武汉 广州  馒头
- 手写promise
- ts 项目

- 如何做好简历区分度
    - 技术栈
        Jest  测试驱动开发
        eslint 代码规范 团队所有人的代码风格一致; '' ""
    - file 切片？
        file 原型是blob 二进制对象 slice


[English](./readme-en.md)

> 推荐使用 Nodejs14

重新演示上传需要删除 /target 中的文件，否则由于服务端保存了文件上传会直接成功

示例大文件下载：https://v0c98mphqw.feishu.cn/file/boxcnZ34jCyQziXxsS9NaV0zfre


前端
* Vue@2
* Element-ui  
* Blob#slice 实现文件切片
* FileReader + WebWorker + spark-md5 生成文件 hash
* xhr 发送 formData

服务端
* Nodejs@14
* multiparty 处理 formData

# start

```
npm install
```

```
npm run start
```

# 相关博客
[字节跳动面试官：请你实现一个大文件上传和断点续传](https://juejin.im/post/5dff8a26e51d4558105420ed
)
