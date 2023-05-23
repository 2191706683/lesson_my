// - node 的文件系统
const fs = require('fs');
const dirPath = 'images';
const sharp = require('sharp');

// 项目亮点描述
function convertToWebp(inputPath, outputFilePath, quality) {
    sharp(inputPath)
        .webp({quality: quality})
        .toFile(outputFilePath, (err, info) => {
            console.log(outputFilePath, 'done', new Date());
        })
};

fs.readdir('images', (err, files) => {
    // 拿到目录信息
    files.forEach(async (file) => {
        const filePath = `${dirPath} / ${file}`;
        const outputFilePath = `${dirPath}/${file.replace(/.jpe?g|.png/gi, '.webp')}`;
        await convertToWebp(filePath, outputFilePath, 80);
    });
});