<template>
  <div id="app">
    <div>
      <input type="file" :disabled="status != Status.wait" @change="handleFileChange" />
      <el-button @click="handleUpload" :disabled="uploadDsiabled">upload</el-button>
    </div>
    <div>
      <div>calculate chunk hash</div>
      <el-progress :percentage="hashPercentage"></el-progress>
    </div>
    <el-table :data="data">
      <el-table-column prop="hash" label="chunk hash" align="center"> </el-table-column>
      <el-table-column width="120" label="size (KB)" align="center">
        <template v-slot="{ row }">
          {{ row.size | TransformByte }}
        </template>
      </el-table-column>
      <el-table-column label="percentage" align="center">
        <template v-slot="{ row }">
          <el-progress :percentage="row.percentage" color="#909399"> </el-progress>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const SIZE = 10 * 1024 * 1024;
const Status = {
  wait: "wait",
  // 流量
  pause: "pause",
  uploading: "uploading",
};
export default {
  name: "App",
  filters: {
    TransformByte(val) {
      return Number(val / 1024).toFixed(0)
    }
  },
  data: () => ({
    Status,
    // 文件状态
    status: Status.wait,
    // 文件对象
    container: {
      file: null,
    },
    data: [], // 切片上传数据数组
    // xhr 列表
    requestList: [],
    hashPercentage: 0, // hash计算进度
  }),
  computed: {
    // 不是那么简单的 计算属性
    uploadDsiabled() {
      return (
        !this.container.file || // 未选择上传文件
        [Status.pause, Status.uploading].includes(this.status)
      );
    },
  },
  methods: {
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      this.resetData();
      this.container.file = file;
    },
    // 做什么？
    // 取消xhr 请求
    resetData() {
      this.requestList.forEach((xhr) => xhr?.abort());
      this.requestList = [];
      // if (this.container)
    },
    async handleUpload() {
      if (!this.container.file) return;

      this.status = Status.uploading;

      const fileChunkList = this.createFileChunk(this.container.file);
      console.log(fileChunkList);
      // 耗时计算任务
      this.container.hash = await this.caculateHash(fileChunkList);
      // map 转变为 请求前的状态
      this.data = fileChunkList.map(({ file }, index) => ({
        fileHash: this.container.hash,
        index,
        hash: this.container.hash + "-" + index,
        chunk: file,
        size: file.size,
        percentage: 0,
      }));
      await this.uploadChunks();
    },
    async uploadChunks() {
      const requestList = this.data
        .map(({ chunk, hash, index }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          formData.append("fileHash", this.container.hash);
          return {
            formData,
            index,
          };
        })
        .map(({ formData }) => {
          this.request({
            url: "http://localhost:3000",
            data: formData,
            onProgress: () => {},
            requestList: this.requestList
          });
        });
      await Promise.all(requestList);
    },
    request({
      url,
      method="post",
      data,
      headers = {},
      onProgress = e => e,
      requestList
    }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = onProgress
        xhr.open(method, url);
        Object.keys(headers).forEach(key => 
          xhr.setRequestHeader(key, headers[key])
        )
        xhr.send(data);
        xhr.onload = e => {
          if (requestList) {
            const xhrIndex = requestList.findIndex(item => item === xhr);
            requestList.splice(xhrIndex, 1)
          }
          resolve({
            data: e.target.response
          })
        }
        requestList?.push(xhr);
      })
     
    },  
    caculateHash(fileChunkList) {
      // 主线程 ->  worker 线程
      return new Promise((resolve) => {
        this.container.worker = new Worker("/hash.js");
        this.container.worker.postMessage({ fileChunkList });
        this.container.worker.onmessage = (e) => {
          const { percentage, hash } = e.data;
          this.hashPercentage = percentage;
          if (hash) {
            resolve(hash);
          }
        };
      });
    },
    createFileChunk(file, size = SIZE) {
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return fileChunkList;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
