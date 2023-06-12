const list = Array.from({length: 10}, (item, index) => ({
    id: Date.now() + Math.floor(Math.random() * 1000000) ,
    title: `白小T${index}`,
    price: (Math.random() * 100).toFixed(2),
    des: `非常舒服， 穿不脏${index}` 
}))

module.exports = class {
    getList() {
        return new Promise((resolve, reject) => {
            // 随机最后更新时间， 
            const resList = list.map((item) => ({
                ...item,
                updatedTime:  + new Date() 
                    - Math.floor((Math.random() * 10000))
            }))
            // console.log(resList)
            resList.sort((a, b) => b.updatedTime - a.updatedTime)
            
            setTimeout(() => {
                resolve(resList)
            }, 500)
        })
    }
    getItem(id) {
        const item = list.find(item => item.id == id)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item)
            }, 500)
        })
    }
}