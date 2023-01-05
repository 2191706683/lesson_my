- 准备工作
  1. 引入vant
    先在该项目的终端中输入 npm i @vant/weapp -S --production
    之后在app.json中 删除 "style": "v2", 防止样式受到干扰
    最后在工具中点击构建npm即可
  2. 使用vant
    需要在app.json导入相应的vant，其他的json中导入无效

  3. 相关图片链接
    头像：https://www.bilibili.com/
    图片：https://wallhaven.cc/
  
- 踩坑
  换行的时候记住每一行后面不要有空格
- 最后
  如果想要运行该项目，在project.config.json中找到appid，修改成自己的appid