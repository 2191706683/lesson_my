<script setup>

</script>

<template>
  <div>
    <!-- <p>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </p>
    <router-view></router-view> -->
    <!-- 组件element3 布局组件 -->
    <el-container>
      <el-header>Header</el-header>
      <el-container width="200px">
        <el-aside>
          <div>
            <router-link to="/">Home</router-link>
          </div>
          <div>
            <router-link to="/about">About</router-link>
          </div>
          <div>
            <router-link to="/other">Other</router-link>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
#app > .el-container {
  margin-bottom: 40px;
}
</style>
