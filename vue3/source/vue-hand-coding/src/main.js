import { effect, reactive } from "./reactivity";
// import { effect, reactive } from "./reactivity";

const obj = reactive({a:1})
effect(() => {
    const val = obj.a
    console.log(val)

})
setTimeout(() => {
    obj.a++
}, 1000)