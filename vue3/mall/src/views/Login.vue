<template>
  <div>
    <SimpleHeader :name="state.type === 'login' ? '登录' : '注册'" :noback="true" />
    <img src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="" class="log">
    <!-- 登陆表单
         注册表单    
    -->
    <div class="login-body login" v-if="state.type === 'login'">
      <van-form @submit="onSubmit">
        <van-field
          v-model="state.username"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{required: true, message: '请输入用户名'}]"
        >
        </van-field>
        <van-field
          v-model="state.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{required: true, message: '请输入密码'}]"
        >
        </van-field>
        <van-field
          center
          clearable
          label="验证码"
          placeholder="输入验证码"
          v-model="state.verify"
        >
          <template #button>
            <vue-img-verify ref="verifyRef" />
          </template>
        </van-field>
        <div style="margin:16px">
          <div class="link-register">立即注册</div>
          <van-button round block native-type="submit" color="#1baeae">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="login-body" v-else></div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import SimpleHeader from '~/SimpleHeader.vue';
import vueImgVerify from '~/VueImgVerify.vue'
import {showFailToast} from 'vant'
import md5 from 'js-md5'
// ref 标定组件或DOM  vue 查找 组件或DOM的方式， 不能用DOM
const verifyRef = ref(null) // 申明一个
// 状态数据
const state = reactive({
  type: 'login',
  username: '',
  password: '',
  verify: ''
})
const onSubmit = async (values) => {
  state.imgCode = verifyRef.value.state.imgCode || ''
  if (state.verify.toLowerCase() !== state.imgCode.toLowerCase()) {
    showFailToast('验证码有误')
    return
  }
  if (state.type == 'login') {
    console.log(md5(values.password,'md5密码'), '-----')
    // const { data } = await login({
    //   "loginName": values.username,
    //   // 密码不能明文传输
    //   "password": values.password
    // })
  }
}
onMounted(() => {
  console.log(verifyRef.value.state.imgCode, '????')
})
</script>

<style lang="stylus" scoped>

</style>