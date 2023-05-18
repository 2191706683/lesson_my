import { getCurrentInstance } from 'vue';
import type { IInstance } from '../modal.type';
// 语言包 json 对象
import defaultLang from './lang/zh-CN';

// 自定义的国际化函数
export const t = (...args: any[]): string => {
    // 当前组件实例
    const instance = getCurrentInstance() as IInstance;
    const _t = instance._hub.t;
    if (_t) return _t(...args);
    // r.confirm 
    // .vue -> template compile 响应式 ts 内存运行 实例化 -> vdom -> onbeforeMount -> 
    // onCreated
    const [path] = args;
    const arr = path.split('.');
    let current: any = defaultLang,
        value: string = '',
        key: string;

    for (let i = 0, len = arr.length; i < len; i++) {
        key = arr[i];
        value = current[key];
        if (i === len - 1) return value;
        if (!value) return '';
        current = value;
    }
    return '';
};