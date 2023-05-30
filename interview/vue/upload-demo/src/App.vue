<template>
  <div id="app">
      <h1>大文件上传抖音面试造火箭</h1>
      <input type="file" @change="handleFileChange">
      <el-button type="primary" @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
import SparkMD5 from 'spark-md5';
// 常量  ts 枚举
// 上传状态 
const Status = {
  wait: "wait",
  pause: "pause",
  uploading: "uploading",
  error: "error",
  done: "done"
}

// 每个切片的大小   HTTP 2.0 
// 多路复用
// Promise.all 并发
// 限流  
const SIZE = 0.2 * 1024 * 1024

export default {
  data: () =>({
    container: {
      file: null
    },
    status: Status.wait
  }),  
  methods: {
    handleFileChange(e) {
      // es6 结构 多个文件的第一个 
      const [file] = e.target.files
      if (!file) return;
      // 响应式 
      this.container.file = file; // vue 2.0 api 友好的地方
    },
    async handleUpload() {
      if (!this.container.file) return;
      // 异步变同步 静下心来一步步做 
      this.status = Status.uploading
      // 一个函数只做一件事 
      const chunks = this.createFileChunk(this.container.file)
      // console.log(chunks);
      // 优化项目的标准
      console.time("samplehash");
      this.container.hash = await this.calculateHashSample();
      console.log(this.container.hash);
      console.timeEnd("samplehash")

    },
    // 切片 面向对象的组织 
    createFileChunk(file, size = SIZE) {
      // html5 file api  文件流 buffer 
      let chunks = [];
      let cur = 0;
      while ( cur < file.size) {
        chunks.push({file: file.slice(cur, cur + size)})
        cur += size;
      }
      return chunks
    },
    // 生成文件hash 唯一 
    calculateHashSample() {
      return new Promise((resolve, reject) => {
        // buffer 整个文件都检索下 
        const spark = new SparkMD5.ArrayBuffer();
        const reader = new FileReader(); // html5
        const file = this.container.file;
        const size = this.container.file.size;
        let offset = 2 * 1024 * 1024;
        let chunks = [file.slice(0, offset)];
        let cur = offset
        while (cur < size) {
          // 最后一片
          if (cur + offset >= size) {
            chunks.push(file.slice(cur, cur + offset))
          } else {
            const mid = cur + offset /2 ;
            const end = cur + offset;
            chunks.push(file.slice(cur, cur + 2));
            chunks.push(file.slice(mid, mid + 2));
            chunks.push(file.slice(end - 2, end));
          }
          cur += offset
        }
        // Blob html5二进制能力 
        reader.readAsArrayBuffer(new Blob(chunks));
        reader.onload = e => {
          spark.append(e.target.result);
          resolve(spark.end());
        }
      })
    }
  }
}
</script>

<style>
</style>
