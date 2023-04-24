// posts.js 转义功能
// 伪代码 prompt 需求到位
// title 属性值结尾 --> 名字改成prompt
// category 属性 开头添加一个空格
// posts_new.json
import fs from 'fs';

// 读取 posts.json 文件中的数据
const postsData = JSON.parse(fs.readFileSync('./data/posts.json'));

// 对数据进行转换操作
const transformedData = postsData.map((post) => ({
  promot: `${post.title} -->`,
  completion: ` ${post.category}$!`,
}));

// 将转换后的数据写入 posts_new.json 文件
fs.writeFileSync(
  './data/posts_new.json',
  JSON.stringify(transformedData),
);

