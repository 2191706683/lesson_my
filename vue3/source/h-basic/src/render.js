import { ChildrenFlags, VNodeFlags } from "./flags"

export default function render(vnode, container) {
    // vnode -> tag children data -> document.createElement DOM -> append -> container DOM
    // 判断是否第一次挂载  挂载 更新， 替换
    const prevVNode = container.vnode
    if (prevVNode == null) {
        mount(vnode, container)
        container.vnode = vnode
    } else {
        // 更新
        if (vnode) {
            // vnode preVNode  diff
            // patch(prevVNode, vnode, container)
            container.vnode = vnode
        } else {
            // 删除
            container.removeChild(prevVNode.el)
            container.node = null
        }
    }

}

function mount(vnode, container, isSVG) {
    const { flags } = vnode
    if (flags & VNodeFlags.ELEMENT) {
        mountElement(vnode, container, isSVG)
    } else if (flags & VNodeFlags.COMPONENT) {
        mountComponent(vnode, container, isSVG)
    } else if (flags & VNodeFlags.TEXT) {
        mountText(vnode, container)
    } else if (flags & VNodeFlags.FRAGMENT) {
        mountFragment(vnode, container, isSVG)
    } else if (flags & VNodeFlags.PORTAL) {
        mountProtal(vnode, container, isSVG)
    }
}

function mountElement(vnode, container, isSVG) {
    isSVG = isSVG || vnode.flags & VNodeFlags.ELEMENT_SVG
    const el = isSVG
        ? document.createElement('http://www.w3.org/2000/svg', vnode.tag)
        : document.createElement(vnode.tag)
    vnode.el = el
    const data = vnode.data
    if (data) {
        for (let key in data) {
            switch (key) {
                case 'style':
                    for (let k in data.style) {
                        el.style[k] = data.style[k]
                    }
                    break;
                case 'class':
                    if (isSVG) {
                        el.setAttribute('class', data[key])
                    } else {
                        // to primitive
                        el.className = data[key].join(' ')
                    }
                    break;
                default:
                    if (domPropsRE.test(key)){
                        el[key] = data[key]
                    } else {
                        el.setAttribute(key, data[key])
                    }
                    break;
            }
        }
    }
    const childFlags = vnode.childFlags
    const children = vnode.children
    if (childFlags !== ChildrenFlags.NO_CHILDREN) {
        if (childFlags & ChildrenFlags.SINGLE_VNODE) {
            mount(children, el, isSVG)
        } else if (childFlags & ChildrenFlags.MULTIPLE_VNODES) {
            for (let i = 0; i < children.length; i++) {
                mount(children[i], el, isSVG)
            }
        }
    }
    container.appendChild(el)
}

const domPropsRE = /\[A-Z]|^(?:value|checked|selected|muted)$/;
 
function mountComponent(vnode, container, isSVG) {
    isSVG = isSVG || vnode.flags & VNodeFlags.ELEMENT_SVG
    const el = isSVG
        ? document.createElement('http://www.w3.org/2000/svg', vnode.tag)
        : document.createElement(vnode.tag)
    vnode.el = el
}
function mountText(vnode, container) {

}
function mountFragment(vnode, container, isSVG) {
    isSVG = isSVG || vnode.flags & VNodeFlags.ELEMENT_SVG
    const el = isSVG
        ? document.createElement('http://www.w3.org/2000/svg', vnode.tag)
        : document.createElement(vnode.tag)
    vnode.el = el
}
function mountProtal(vnode, container, isSVG) {
    isSVG = isSVG || vnode.flags & VNodeFlags.ELEMENT_SVG
    const el = isSVG
        ? document.createElement('http://www.w3.org/2000/svg', vnode.tag)
        : document.createElement(vnode.tag)
    vnode.el = el
}