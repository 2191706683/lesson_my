const http = require("http");
const server = http.createServer();
const fse = require('fs-extra')
const multiparty = require('multiparty');
const path = require("path");

const UPLOAD_DIR = path.resolve(__dirname, '..', "target")
server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }

  // HTTP 层面？ 断点续传
  // 多路复用 http2.0  更快
  // 收集并发过来的切片上传请求
  if (req.url == '/') {
    
  }
  if (req.url == '/merge') {
    res.end("merge")
  }
  const multipart = new multiparty.Form()
  multipart.parse(req, async (err, fields, files) => {
    if (err) {
      return
    }
    console.log(files)
    const [chunk] = files.chunk
    const [hash] = fields.hash
    const [filename] = fields.filename
    const chunkDir = path.resolve(UPLOAD_DIR, 'chunkDir' + filename)
    // console.log(chunk, hash, filename, chunkDir)
    // res.end('hello world')
    if (!fse.existsSync(chunkDir)) {
      await fse.mkdirs(chunkDir)
    }

    await fse.move(chunk.path, `${chunkDir}/${hash}`) // 写入文件
    res.end("received file chunk")
  })

});

server.listen(3000, () => console.log("listening port 3000"));
