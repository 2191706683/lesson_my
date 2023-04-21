const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

function stepOne(filename) {
    const content = fs.readFileSync(filename, 'utf-8')
    // console.log(content)
    // 根据文本生成抽象语法树 JSON  Program
    const ast = parser.parse(content, {
        sourceType: 'module'
    })
    // console.log(ast)
    const dependencies = []  // 收集依赖关系，计算出来优先级
    traverse(ast, {
        ImportDeclaration({ node }) {
            // console.log(node, node.source.value) // 相对路径
            const dirname = path.dirname(filename)
            // console.log(dirname)
            const newFile = './' + path.join(dirname, node.source.value)
            // console.log(newFile)
            dependencies[node.source.value] = newFile
        }
    })
    // console.log(dependencies)
    const { code } = babel.transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    })
    return {
        filename,
        dependencies,
        code
    }
    // console.log(code)
}

// 入口 遍历沿路的所有风景
function stepTwo(entry) {
    const entryModule = stepOne(entry)
    // 图
    const graphArray = [entryModule]
    for (let i = 0; i < graphArray.length; i++) {
        const item = graphArray[i]
        const { dependencies } = item
        for (let j in dependencies) {
            graphArray.push(
                stepOne(dependencies[j])
            )
        }
    }
    // 生成图谱
    const graph = {}
    graphArray.forEach(item => {
        graph[item.filename] = {
            dependencies: item.dependencies,
            code: item.code
        }
    })
    return graph
}
// console.log(stepTwo('./src/index.js'))
// 生成代码 文本
// stepOne('./src/index.js')
//下面是生成代码字符串的操作，仔细看，不要眨眼睛哦！
function step3(entry){
    //要先把对象转换为字符串，不然在下面的模板字符串中会默认调取对象的toString方法，参数变成[Object object],显然不行
    const graph = JSON.stringify(stepTwo(entry))
    return `
        (function(graph) {
            //require函数的本质是执行一个模块的代码，然后将相应变量挂载到exports对象上
            function require(module) {
                //localRequire的本质是拿到依赖包的exports变量
                function localRequire(relativePath) {
                    return require(graph[module].dependencies[relativePath]);
                }
                var exports = {};
                (function(require, exports, code) {
                    eval(code);
                })(localRequire, exports, graph[module].code);
                return exports;//函数返回指向局部变量，形成闭包，exports变量在函数执行后不会被摧毁
            }
            require('${entry}')
        })(${graph})`
}

const code = step3('./src/index.js')
fs.writeFile('code.js', code, 'utf-8', function(err) {
    if (!err) {
        console.log('写入成功')
    }
})
console.log(code)

