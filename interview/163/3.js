function isSameTree(p, q) {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    } else if (p.value !== q.value) {
        return false;
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}