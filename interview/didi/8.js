const array = [
    {
        code: 101,
        name: '北京',
    },
    {
        code: 102,
        name: '石家庄',
    },
    {
        code: 102,
        name: '江苏',
        children: [{
            code: 102,
            name: '南京',
        }, {
            code: 102,
            name: '连云港',
        }]
    }
]

// 请把数组转json
// es6风格

function toObj(arr) {
    let obj = {};
    for (let item of arr) {
        if (item['children'] !== undefined) {
            obj = {...toObj(item['children']), ...obj}
        } else {
            obj[item.name] = item
        }
    }
    return obj;
}

console.log(toObj(array))