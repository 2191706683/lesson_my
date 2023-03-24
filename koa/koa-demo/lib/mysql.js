const mysql = require('mysql2') // mysql 驱动
const config = require('../config/default.js')

const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
})
// sql 语句， 必传
// values CRUD  Insert into   values ? 
let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

exports.findDataCountByName = (name) => {
    let _sql = `select count(*) as count from users where name="${name}"`
    return query(_sql)
}
exports.insertData = (value) => {
    let _sql = "insert into users set name=?, pass=?, avatar=?,moment=?;"
    return query(_sql, value)
}
exports.findDataByName = (name) => {
    let _sql = `select * from users where name="${name}";`
    return query(_sql) 
}
// 通过文章id 查找
exports.findDataById = (id) => {
let _sql = `select * from posts where id="${id}";`
return query(_sql) 
}
exports.updatePostPv = (value) => {
    let _sql = "update posts set pv = pv + 1 where id=?;"
    return query(_sql, value)
}

// exports.findUserData = (name) => {
// let _sql = `select * from users where name="${name}";`
// return query(_sql)
// }

// 发表文章
// value []  顺序传值
exports.insertPost = (value) => {
    let _sql = "insert into posts set name=?, title=?, content=?, md=?, uid=?, moment=?, avatar=?;"
    return query(_sql, value)
}

exports.findCommentsCountById = (id) => {
let _sql = `select count(*) as count from comments where postid="${id}";`
return query(_sql)
}

let users = 
    `create table if not exists users(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL COMMENT '用户名',
        pass VARCHAR(100) NOT NULL COMMENT '密码',
        avatar VARCHAR(100) NOT NULL COMMENT '头像',
        moment VARCHAR(100) NOT NULL COMMENT '注册时间',
        PRIMARY KEY (id),
        UNIQUE KEY (name)
    );`

let posts = `
    create table if not exists posts(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '文章作者',
    uid VARCHAR(40) NOT NULL COMMENT '用户id',
    title TEXT(0) NOT NULL COMMENT '标题',
    content TEXT(0) NOT NULL COMMENT '内容',
    md TEXT(0) NOT NULL COMMENT 'markdown',
    moment VARCHAR(100) NOT NULL COMMENT '发表时间',
    pv  VARCHAR(40) NOT NULL DEFAULT '0' COMMENT '浏览量',
    avatar VARCHAR(100) NOT NULL COMMENT '用户头像',
    PRIMARY KEY(id)
    );
`
let comments = `
create table if not exists comments(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '用户名称',
    content TEXT(0) NOT NULL COMMENT '评论内容',
    moment VARCHAR(40) NOT NULL COMMENT '评论时间',
    postid VARCHAR(40) NOT NULL COMMENT '文章id',
    avatar VARCHAR(100) NOT NULL COMMENT '用户头像',
    PRIMARY KEY(id)
);
`
let createTable = (sql) => {
    return query(sql, [])
}
createTable(users)
createTable(posts)
createTable(comments)