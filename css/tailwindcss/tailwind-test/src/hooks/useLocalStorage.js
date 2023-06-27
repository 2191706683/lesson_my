// hooks 把状态/生命周期等封装到
import { useState, useEffect } from 'react';


const useLocalStorage = (key, initialValue) => {
    // useState 复杂些 初始值通过计算出来的
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    // 监听更新
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue]
}



export default useLocalStorage;