<template>
  <div id="app">
    <div>
      <input type="file" @change="handleFileChange" />
      <el-button @click="handleUpload">upload</el-button>
    </div>
  </div>
</template>

<script>
// 切片大小
// chunk size
const SIZE = 10 * 1024 * 1024;

export default {
  name: "app",
  data: () => ({
    container: {
      file: null,
    },
    data: [],
  }),
  methods: {
    request({
      url,
      method = "post",
      data,
      headers = {},
      onProgress = (e) => e,
      requestList,
    }) {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = onProgress;
        xhr.open(method, url);
        Object.keys(headers).forEach((key) => xhr.setRequestHeader(key, headers[key]));
        xhr.send(data);
        xhr.onload = (e) => {
          // 将请求成功的 xhr 从列表中删除
          // remove xhr which status is success
          if (requestList) {
            const xhrIndex = requestList.findIndex((item) => item === xhr);
            requestList.splice(xhrIndex, 1);
          }
          resolve({
            data: e.target.response,
          });
        };
        // 暴露当前 xhr 给外部
        // export xhr
        requestList?.push(xhr);
      });
    },
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      // console.log(this.$data, this.$options.data())
      Object.assign(this.$data, this.$options.data());
      this.container.file = file;
    },
    createFileChunk(file, size = SIZE) {
      const fileChunkList = [];
      let cur = 0;
      console.log(file);
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return fileChunkList;
    },
    async handleUpload() {
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      // console.log(fileChunkList);
      // reactive
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: this.container.file.name + "-" + index,
      }));
      await this.uploadChunks();
    },
    async uploadChunks() {
      const requestList = this.data
        .map(({ chunk, hash }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          return { formData };
        })
        .map(({ formData }) =>
          this.request({
            url: "http://localhost:3000",
            data: formData,
          })
        );
      await Promise.all(requestList);
      await this.mergeRequest();
    },
    async mergeRequest() {
      await this.request({
        url: 'http://localhost:3000/merge',
        headers: {
          "content-type": "application/json"
        },
        data: JSON.stringify({
          filename: this.container.file.name
        })
      })
    }
  }
};
</script>
