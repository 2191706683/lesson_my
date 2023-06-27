const Koa = require('koa');
const Router = require('koa-router'); 
const static = require('koa-static'); // 静态资源服务插件
const path = require('path');
const bodyParser = require('koa-bodyparser'); // 解析post请求参数
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todos', 
{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error);
const db = mongoose.connection;
db.once('open', () => {
    console.log('成功连接到数据库');
})
db.on('error', console.error.bind(console, '链接数据库失败:'));

const app = new Koa();
const staticPath = './static';
app.use(static(path.join(__dirname, staticPath)));
app.use(bodyParser());

const router = new Router({prefix: '/api'});
const todoSchema = new mongoose.Schema({
    text: String
});
const Todo = mongoose.model('Todo', todoSchema);

router.post('/todos', async (ctx) => {
    const { text } = ctx.request.body;
    const todo = new Todo({
        text
    });
    await todo.save();
    ctx.body = todo;
})

router.get('/todos', async (ctx) => {
    const todos = await Todo.find({}, 'text');
    ctx.body = todos;
})

router.get('/todos/:id' , async (ctx) => {
    const { id } = ctx.params;
    console.log(id);
    const todo = await Todo.findById(id);
    ctx.body = todo;
})

router.put('/todos/:id', async (ctx) => {
    const { id } = ctx.params;
    const { text } = ctx.request.body;
    
    const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        {text},
        { new: true}
    )
    if (!updatedTodo) {
        ctx.status = 404;
        ctx.body = { error: '该todo不存在' };
    } else {
        ctx.body = updatedTodo;
    }
})

router.delete('/todos/:id', async (ctx) => {
    const { id } = ctx.params;
    const deletedTodo = await Todo.findByIdAndRemove(id);
    if (!deletedTodo) {
        ctx.status = 404;
        ctx.body = { error: '该todo不存在' };
    } else {
        ctx.body = deletedTodo;
    }
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(1314, () => {
});
