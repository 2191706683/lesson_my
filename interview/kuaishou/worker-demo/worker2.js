self.addEventListener('message', (event) => {
    const n = event.data;
    const result = fibonacci(n);
    self.postMessage({inputNumber:n, result}) 
})

function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b.toString();
}