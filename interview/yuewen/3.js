// 给定一些目录路径，聚合成树形结构 
const pathList = [
    '/root/dir1/file1.txt',
    '/root/dir1/subdir1/file2.txt',
    '/root/dir2/file3.txt',
    '/root/dir2/subdir2/file4.txt',
    '/root/dir2/subdir3/file5.txt'
];

// json 树
const tree = {};

for (let path of pathList) {
    const parts = path.split('/').filter(part => part !== '');
    console.log(parts, '////');
    let currentNode = tree;
    for (let i = 0; i < parts.legnth - 1; i++) {
        const part = parts[i];
        if (!currentNode[part]) {
            currentNode[part] = {}
        }
        currentNode = currentNode[part];
    }
    const fileName = parts[parts.length - 1];
    if (!currentNode.files) {
        currentNode.files = {};
    }
    currentNode.files.push(fileName);
}
console.log(tree);