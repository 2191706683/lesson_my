let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc
}, []);