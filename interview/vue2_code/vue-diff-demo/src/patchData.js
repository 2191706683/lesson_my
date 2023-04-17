export function patchData(el, key, prevValue, nextValue) {
    switch(key) {
        case 'style': 
            for (let k in nextValue){
                el.style[k] = nextValue[k] // 行内样式要少用  不会有太多
            }
            for (let k in prevValue) {
                if (!nextValue.hasOwnProperty(k)) {
                    el.style[k] = '' //删除
                }
            }
            break;
        case 'class': 
            el.className = nextValue

            break;
        default:
            // 事件监听
            if (key[0] === 'o' && key[1] === 'n') {
                // if ()
            }
            if (domPropsRE.test(key)) {
                el[key] = nextValue
            } else {
                el.setAttribute(key, nextValue)
            }
            break;
    }
}