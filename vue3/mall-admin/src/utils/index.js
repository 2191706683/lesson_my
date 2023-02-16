export const getPageTitle = (pathName) => {
    const data = {
        login: '登录',
        introduce: '系统介绍',
        add: '添加商品'
    }
    return data[pathName] || ''
}

export const getLocal = (name) => {
    return JSON.parse(localStorage.getItem(name))
}

// h5 提供的本地keyValue存储 
export const setLocal = (name, val) => {
    localStorage.setItem(name, JSON.stringify(val))
}
