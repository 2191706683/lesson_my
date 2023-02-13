function sum(a, b) {
    let args = Array.prototype.concat.apply([], arguments)
    console.log(args)
}
sum(1,2)